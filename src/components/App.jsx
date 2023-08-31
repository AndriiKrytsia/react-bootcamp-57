import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Header } from './Header/Header';

const eazyLazy = path => {
  return lazy(() => import(`pages/${path}`));
};

const Home = eazyLazy('Home');
const Cocktails = eazyLazy('Cocktails');
const CocktailsSearch = lazy(() => import('pages/CocktailsSearch'));
const CocktailDetails = lazy(() => import('pages/CocktailDetails'));
const Gallery = lazy(() => import('pages/Gallery'));
const Todos = lazy(() => import('pages/Todos'));
const Points = lazy(() => import('pages/Points'));
const Counter = lazy(() => import('pages/Counter'));
const Props = lazy(() => import('pages/Props'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="cocktails" element={<Cocktails />} />
        <Route path="cocktails-search" element={<CocktailsSearch />} />
        <Route path="cocktails/:cocktailId" element={<CocktailDetails />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="todos" element={<Todos />} />
        <Route path="props" element={<Props />} />
        <Route path="points" element={<Points />} />
        <Route path="counter" element={<Counter />} />
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
