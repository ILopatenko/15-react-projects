import React, { useState } from 'react';
import people from './data';
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
  FaSortNumericDownAlt,
} from 'react-icons/fa';

const Review = () => {
  console.log(people);
  const [index, setIndex] = useState(0);
  const { name, id, job, text, image } = people[index];

  const checkIndex = (indexToCheck) => {
    if (indexToCheck === people.length) {
      return 0;
    } else if (indexToCheck === -1) {
      return people.length - 1;
    } else {
      return indexToCheck;
    }
  };

  const nextPerson = () => {
    setIndex((index) => {
      return checkIndex(index + 1);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      return checkIndex(index - 1);
    });
  };

  const rndPerson = () => {
    let rndIndex = Math.floor(Math.random() * people.length);
    if (rndIndex === index) {
      rndIndex = index + 1;
    }
    setIndex(checkIndex(rndIndex));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <p className='info'>{id}</p>
      <div className='button-container'>
        <button onClick={prevPerson} className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson} className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={rndPerson} className='random-btn'>
        RANDOM
      </button>
    </article>
  );
};

export default Review;
