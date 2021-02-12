import React, { useState } from 'react';
import data from './data';
import Question from './Question';

const App = () => {
  return (
    <main>
      <div className='container'>
        <h3>Questions and </h3>
        <section className='info'>
          {data.map((el) => {
            return <Question id={el.id} {...el} />;
          })}
        </section>
      </div>
    </main>
  );
};
export default App;
