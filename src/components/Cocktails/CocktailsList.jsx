import { Link, useLocation } from 'react-router-dom';

export const CocktailsList = ({ cocktails }) => {
  const location = useLocation();
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {cocktails.map(cocktail => (
        <li key={cocktail.idDrink}>
          <Link
            to={`/cocktails/${cocktail.idDrink}`}
            state={{ from: location }}
          >
            <img
              width="200px"
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
            />
            <p>{cocktail.strDrink}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
