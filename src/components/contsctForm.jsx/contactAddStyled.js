import styled from 'styled-components';
export const StyledForm = styled.form`
  list-style-position: inside;
  width: 50%;
  background: white;
  box-shadow: 0.25rem 0.25rem 0.75rem rgb(0 0 0 / 0.15);
  padding: 0;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.1rem;
  padding: 15px;
`;

export const StyledErrMsg = styled.div`
  font-size: medium;
  color: red;
`;
export const StyledBtn = styled.button`
  max-width: 150px;
  margin: 0;
  cursor: pointer;
  background-color: rgb(231, 128, 231);
  border: none;
  border-radius: 4px;
  color: white;
  &:hover {
    background-color: rgb(190, 23, 190);
  }
  ,&: disabled {
    background-color: rgb(231, 209, 231);
    border-radius: 4px;
    color: #666666;
  }
`;
export const StyledBtnAdd = styled.button`
  display: block;
  max-width: 250px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  background-color: rgb(231, 128, 231);
  border: none;
  border-radius: 4px;
  color: white;
  &:hover {
    background-color: rgb(190, 23, 190);
  }
  ,&: disabled {
    background-color: rgb(231, 209, 231);
    border-radius: 4px;
    color: #666666;
  }
`;
