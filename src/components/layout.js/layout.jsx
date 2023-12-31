import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import {
  StyledHeader,
  StyledLayout,
  StyledList,
  StyledNavLink,
  StyledWrapper,
} from './layoutStyled';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/userMenu.js/userMenu';
export default function Layout() {
  const isLogIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <StyledLayout>
      <ToastContainer position="top-right" />
      <StyledHeader>
        {!isLogIn ? (
          <StyledList>
            <li>
              <StyledNavLink to="/login">Login</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/register">Register</StyledNavLink>
            </li>
          </StyledList>
        ) : (
          <StyledWrapper>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            <UserMenu />
          </StyledWrapper>
        )}
      </StyledHeader>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </StyledLayout>
  );
}
