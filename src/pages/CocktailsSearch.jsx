import { CocktailsList } from 'components/Cocktails/CocktailsList';
import { Form } from 'components/Form';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchCocktailByName } from 'service/cocktailsService';

const CocktailsSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    searchCocktailByName(query).then(setCocktails);
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <div>
      CocktailsSearch
      <Form onSubmit={handleSubmit} nameButton={'Search Cocktail'} />
      <CocktailsList cocktails={cocktails} />
    </div>
  );
};

export default CocktailsSearch;
