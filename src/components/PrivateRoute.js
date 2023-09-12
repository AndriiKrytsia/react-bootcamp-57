import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin, selectIsRefreshing } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLogin);
  const isRefresh = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLogin && !isRefresh;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
