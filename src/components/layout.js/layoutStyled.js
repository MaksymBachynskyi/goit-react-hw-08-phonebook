import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
export const StyledList = styled.ul`
  display: flex;
  gap: 28px;
`;
export const StyledNavLink = styled(NavLink)`
  color: black;
  font-size: 2rem;
  line-height: 2.8rem;
  font-weight: 600;
  text-decoration: none;
  &.active {
    color: rgb(231, 128, 231);
  }
`;
export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledHeader = styled.header`
  border-bottom: 1px solid;
  padding: 0px;
`;
