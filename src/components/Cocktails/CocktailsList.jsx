import { Link } from 'react-router-dom';

export const CocktailsList = ({ cocktails }) => {
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {cocktails.map(cocktail => (
        <li key={cocktail.idDrink}>
          <Link to={`/cocktails/${cocktail.idDrink}`}>
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
