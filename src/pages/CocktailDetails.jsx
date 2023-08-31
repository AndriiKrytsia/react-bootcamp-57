import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getCocktailDetails } from 'service/cocktailsService';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
export const CocktailDetails = () => {
  const [cocktail, setCocktail] = useState(null);
  const { cocktailId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');

  useEffect(() => {
    getCocktailDetails(cocktailId).then(setCocktail);
  }, [cocktailId]);

  if (!cocktail) return;
  return (
    <div style={{ padding: 20 }}>
      <Link to={backLink.current}>Go Back</Link>
      <h2>CocktailDetails {cocktail.strDrink}</h2>

      <img
        width="300"
        src={cocktail.strDrinkThumb ? cocktail.strDrinkThumb : defaultImg}
        alt={cocktail.strDrink}
      />
      <p>Type:{cocktail.strAlcoholic}</p>
      <p>Instruction:{cocktail.strInstructions}</p>
    </div>
  );
};
