import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operation';
import { selectorFiltred } from 'redux/selectors';

import { StyledItem, StyledText, StyledWrapContacts } from './contactsStyled';
import { StyledBtn } from 'components/contsctForm.jsx/contactAddStyled';

export default function Contacts() {
  const dispatch = useDispatch();
  const list = useSelector(selectorFiltred);
  return (
    <StyledWrapContacts>
      {list.map(item => {
        return (
          <StyledItem key={item.id}>
            <StyledText>{item.name}</StyledText>
            <StyledBtn
              type="button"
              onClick={() => dispatch(deleteContacts(item.id))}
            >
              Delete
            </StyledBtn>
          </StyledItem>
        );
      })}
    </StyledWrapContacts>
  );
}
//
