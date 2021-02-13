import React, { useState } from 'react';
import data from './data';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    } else if (amount > 5) {
      amount = 5;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className='section-center'>
      <h3> Need some text? </h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragpaphs: </label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((element, index) => {
          return <p key={index}>{element}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
