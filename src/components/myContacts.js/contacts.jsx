import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operation';
import { selectorFiltred } from 'redux/selectors';
import { StyledItem, StyledText, StyledWrapContacts } from './contactsStyled';
import { StyledBtn } from 'components/contsctForm.jsx/contactAddStyled';

import { useState } from 'react';
import { ModalEl } from 'components/updateContacts.jsx/modal';

export default function Contacts() {
  const dispatch = useDispatch();
  const list = useSelector(selectorFiltred);

  const [user, setUser] = useState(false);
  return (
    <StyledWrapContacts>
      {list.map(item => {
        return (
          <StyledItem key={item.id}>
            <StyledText>{item.name}</StyledText>
            <StyledText>{item.number}</StyledText>
            <StyledBtn
              type="button"
              onClick={() => dispatch(deleteContacts(item.id))}
            >
              Delete
            </StyledBtn>
            <button onClick={() => setUser(item)}>Update</button>
            <ModalEl onToogelModal={setUser} user={user}></ModalEl>
          </StyledItem>
        );
      })}
    </StyledWrapContacts>
  );
}
//
