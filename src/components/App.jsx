import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './layout.js/layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshing } from 'redux/operation';
import { RestrictedRoute } from './restrictedRoute';
import { PrivateRoute } from './privateRoue';

const RegisterPage = lazy(() => import('pages.js/register'));
const LoginPage = lazy(() => import('pages.js/login'));
const ContactsPage = lazy(() => import('pages.js/contacts'));
export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  useEffect(() => {
    dispatch(refreshing());
    console.log('aa');
  }, [dispatch]);

  return isRefreshing ? (
    <div>Loading...</div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirect="/contacts"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirect="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirect="/login" />
          }
        />
      </Route>
    </Routes>
  );
};
