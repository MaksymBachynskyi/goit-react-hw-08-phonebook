import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import{selectorIsLogedIn} from 'redux/selectors';
import{selectorisRefreshing} from 'redux/selectors';
export const PrivateRoute = ({ component, redirect }) => {
  const isLogin = useSelector(selectorIsLogedIn);
  const isRefreshed = useSelector(selectorisRefreshing);
  const shoudRedirect = !isLogin && !isRefreshed;

  return <div>{shoudRedirect ? <Navigate to={redirect} /> : component}</div>;
};
