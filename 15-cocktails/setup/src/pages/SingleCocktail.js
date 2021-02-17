import React, { useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  const fetchCoctail = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${id}`);
      const currentCocktail = await response.json();
      if (currentCocktail.drinks) {
        const {
          idDrink: id,
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strGlass: glass,
          strInstructions: instructions,
          strIngridient1,
          strIngridient2,
          strIngridient3,
          strIngridient4,
          strIngridient5,
        } = currentCocktail.drinks[0];

        const ingridients = [
          strIngridient1,
          strIngridient2,
          strIngridient3,
          strIngridient4,
          strIngridient5,
        ];

        const newCocktail = {
          name,
          image,
          info,
          glass,

          instructions,
          ingridients,
        };

        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw Error;
    }
  };

  React.useEffect(() => {
    fetchCoctail();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className='section-title'>No cocktail</h2>;
  }

  const { name, image, info, glass, instructions, ingridients } = cocktail;
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        Back HOME
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name: </span>
            {name}
          </p>

          <p>
            <span className='drink-data'>info: </span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass: </span>
            {glass}
          </p>

          <p>
            <span className='drink-data'>ingridients: </span>
            {console.log(ingridients)}
            {ingridients.map((el, index) => {
              return el ? <span key={index}>{el}</span> : null;
            })}
          </p>
          <p>
            <span className='drink-data'>instructions: </span>
            {instructions}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
