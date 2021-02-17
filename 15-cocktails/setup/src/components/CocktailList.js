import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { loading, coctails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (coctails.length < 1) {
    return (
      <h2 className='section-title'>no coctails mathed your search criteria</h2>
    );
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>
      <div className='cocktails-center'>
        {coctails.map((el) => {
          return <Cocktail key={el.id} {...el} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
