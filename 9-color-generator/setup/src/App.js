import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(5));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(5);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            generate
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((element, index) => {
          return (
            <SingleColor
              key={index}
              {...element}
              index={index}
              hexColor={element.hex}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;
