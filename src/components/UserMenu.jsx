import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <ul>
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
      <p>Welocome: {user.name}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
};
