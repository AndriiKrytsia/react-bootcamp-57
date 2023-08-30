import { CocktailsList } from 'components/Cocktails/CocktailsList';
import { useEffect, useState } from 'react';
import { getTrendingCocktails } from 'service/cocktailsService';

export const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    getTrendingCocktails().then(setCocktails);
  }, []);
  console.log(cocktails);

  return <CocktailsList cocktails={cocktails} />;
};
