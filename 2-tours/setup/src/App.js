import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

//URL for receive a data about all the tours (API)
const url = 'https://course-api.com/react-tours-project';

//Main module: App
const App = () => {
  //Create a STATE 'loading' with useState() hook for storage state of loading
  //(it will show if all the information is loaded successfuly (FALSE) or is not loaded (TRUE))
  const [loading, setLoading] = useState(true);

  //Create a STATE 'tours' with useState() hook for store all the tours. Default value is an empty array
  const [tours, setTours] = useState([]);

  // ============= declare function REMOVETOUR =============
  //Create a function removeTour with 1 received parameter - ID - to delete a tour with that ID from array of tours
  //(this function removeTour will filter an array of all the tours - and delete only 1 tour (with received id))
  const removeTour = (id) => {
    const newTours = tours.filter((el) => el.id !== id);
    setTours(newTours);
  };
  // ============= end function REMOVETOUR =============

  // ============= declare function FETCHTOURS =============
  //Create a function 'fetchTours' what will receive all the information about tours thrue the API
  const fetchTours = async () => {
    //First of all set variable 'loading' as TRUE
    setLoading(true);

    //Create a try/catch block
    try {
      //Create a variable 'response' to store a response from API
      const response = await fetch(url);

      //Create a variable 'tours' to store response with information about all the tours as a JSON object
      const tours = await response.json();

      //Set STATE 'loading' as FALSE - it will mean that all the data reseived successfuly
      setLoading(false);

      //Set STATE 'tours' to a variable tours
      setTours(tours);
      console.log(tours);
    } catch (error) {
      //Set STATE 'loading' as TRUE - it will mean that we have a problem with reseiving data from API
      setLoading(true);
      console.log(error);
    }
  };
  // ============= end function FETCHTOURS =============

  //Create a useEffect() hook to fetch all the data when page will be loading (rendering) ONLY AT FIRST TIME!
  useEffect(() => {
    fetchTours();
  }, []);

  //Create a condition (ternary operator). If loading has a value of TRUE - App will render Loading Module
  //If loading has a value of FALSE - App will render Tours Module
  return loading ? (
    <main>
      <Loading />
    </main>
  ) : tours.length === 0 ? (
    <main>
      <div className='title'>
        <h2>No any toors</h2>
        <button className='btn' onClick={fetchTours}>
          Refresh
        </button>
      </div>
    </main>
  ) : (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
