import styled from 'styled-components';

export const StyledWrapperUser = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const StyledBtnUser = styled.button`
  max-width: 250px;
  margin: 0px;
  cursor: pointer;
  background-color: rgb(231, 128, 231);
  border: none;
  border-radius: 4px;
  color: white;
  padding: 5px;
  &:hover {
    background-color: rgb(190, 23, 190);
  }
`;
