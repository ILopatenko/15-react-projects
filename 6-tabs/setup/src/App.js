import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [jobsHistoryArray, setJobsHistoryArray] = useState([]);
  const [jobForDisplay, setJobForDisplay] = useState(0);

  const fetchDataFromAPI = async (linkToAPI) => {
    const responseFromAPI = await fetch(linkToAPI);
    const arrayOfJobsJson = await responseFromAPI.json();
    setJobsHistoryArray(arrayOfJobsJson);
    setIsDataLoaded(true);
  };

  useEffect(() => {
    fetchDataFromAPI(url);
  }, []);

  const displayError = () => {
    return <h1>Connectong to API ...</h1>;
  };

  const displayJob = () => {
    const { id, order, title, dates, duties, company } = jobsHistoryArray[
      jobForDisplay
    ];
    return (
      <section className='section'>
        <div className='title'>
          <h2>Experience</h2>
          <div className='underline'></div>
        </div>
        <div className='jobs-center'>
          <div className='btn-container'>
            {jobsHistoryArray.map((element, index) => {
              return (
                <button
                  className={`job-btn ${
                    index === jobForDisplay && 'active-btn'
                  }`}
                  key={element.id}
                  onClick={() => setJobForDisplay(index)}
                >
                  {element.company}
                </button>
              );
            })}
          </div>
          <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map((el, index) => {
              return (
                <div key={index} className='job-desc'>
                  <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                  <p>{el}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    );
  };

  return isDataLoaded ? displayJob() : displayError();
};

export default App;
