import React from 'react';
import Tour from './Tour';

//Tours component (takes oa array of objects [{}, {}, ... {}])
const Tours = ({ tours, removeTour }) => {
  //Return JSX
  return (
    <section>
      {/* Header */}
      <div className='title'>
        <h2>Our tours:</h2>
        <div className='underline'></div>
      </div>

      {/* This div will return a Tour component for each of tours */}
      <div>
        {tours.map((el) => {
          return <Tour key={el.id} {...el} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
