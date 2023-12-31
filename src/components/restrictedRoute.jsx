import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import{selectorIsLogedIn} from 'redux/selectors';
export const RestrictedRoute = ({ component, redirect }) => {
  const isLogin = useSelector(selectorIsLogedIn);

  return <div>{isLogin ? <Navigate to={redirect} /> : component}</div>;
};
