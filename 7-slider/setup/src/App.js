import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

const App = () => {
  const [people, setPeople] = useState(data);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (activeIndex < 0) {
      setActiveIndex(lastIndex);
    } else if (activeIndex > lastIndex) {
      setActiveIndex(0);
    }
  }, [activeIndex, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setActiveIndex(activeIndex + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [activeIndex]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((element, index) => {
          const { id, image, name, title, quote } = element;
          let position = 'nextSlide';
          if (activeIndex === index) {
            position = 'activeSlide';
          }
          if (
            activeIndex === index - 1 ||
            (index === 0 && activeIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button
          className='prev'
          onClick={() => setActiveIndex(activeIndex - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          className='next'
          onClick={() => setActiveIndex(activeIndex + 1)}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default App;
