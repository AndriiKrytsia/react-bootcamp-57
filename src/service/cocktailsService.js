import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const instance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

const urls = Array.from({ length: 12 }, () => BASE_URL);

export const getTrendingCocktails = () => {
  return Promise.all(
    urls.map(async url => {
      const { data } = await instance.get(url);
      return data.drinks[0];
    })
  );
};
