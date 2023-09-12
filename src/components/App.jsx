import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import { Header } from './Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';

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
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresh ? (
    <p>Refreshing...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/todos" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/todos" component={<Login />} />
          }
        />
        <Route
          path="cocktails"
          element={
            <PrivateRoute redirectTo="/login" component={<Cocktails />} />
          }
        />
        <Route
          path="cocktails-search"
          element={
            <PrivateRoute redirectTo="/login" component={<CocktailsSearch />} />
          }
        />
        <Route
          path="cocktails/:cocktailId"
          element={
            <PrivateRoute redirectTo="/login" component={<CocktailDetails />} />
          }
        />
        <Route
          path="gallery"
          element={<PrivateRoute redirectTo="/login" component={<Gallery />} />}
        />
        <Route
          path="todos"
          element={<PrivateRoute redirectTo="/login" component={<Todos />} />}
        />
        <Route
          path="props"
          element={<PrivateRoute redirectTo="/login" component={<Props />} />}
        />
        <Route
          path="points"
          element={<PrivateRoute redirectTo="/login" component={<Points />} />}
        />
        <Route
          path="counter"
          element={<PrivateRoute redirectTo="/login" component={<Counter />} />}
        />
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
