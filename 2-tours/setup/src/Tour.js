import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  //Tour component will return JSX with a full description for a single tour
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 150)} ... `}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore === false ? 'Read more' : 'Show less'}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className='delete-btn'>
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
