import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1> ERROR!!!</h1>
        <h3>It is a ded end</h3>
        <Link to='/' className='btn btn-primary'>
          Back to HOME page
        </Link>
      </div>
    </section>
  );
};

export default Error;
