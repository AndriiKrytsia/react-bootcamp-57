import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cocktails">Cocktails</NavLink>
            </li>
            <li>
              <NavLink to="/cocktails-search">Cocktails Search</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/todos">Todos</NavLink>
            </li>
            <li>
              <NavLink to="/props">Props</NavLink>
            </li>
            <li>
              <NavLink to="/points">Points</NavLink>
            </li>
            <li>
              <NavLink to="/counter">Counter</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
