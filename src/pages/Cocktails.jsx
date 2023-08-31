import { CocktailsList } from 'components/Cocktails/CocktailsList';
import { useEffect, useState } from 'react';
import { getTrendingCocktails } from 'service/cocktailsService';

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    getTrendingCocktails().then(setCocktails);
  }, []);

  return <CocktailsList cocktails={cocktails} />;
};

export default Cocktails;
