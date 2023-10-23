import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operation';
import { selectorEmail } from 'redux/selectors';
import { StyledBtnUser, StyledWrapperUser } from './userMenuStyled';
export const UserMenu = () => {
  const userEmail = useSelector(selectorEmail);
  const dispatch = useDispatch();
  return (
    <StyledWrapperUser>
      <h3>{userEmail}</h3>
      <StyledBtnUser type="button" onClick={() => dispatch(logOut())}>
        Logout
      </StyledBtnUser>
    </StyledWrapperUser>
  );
};
