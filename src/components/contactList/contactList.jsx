import { StyledBtn, Wrapper } from './contactList.styled';
import { deleteContacts } from 'redux/operation';
import { useDispatch, useSelector } from 'react-redux';

import { selectorFiltred } from 'redux/selectors';
export const ContactList = () => {
  const contactsList = useSelector(selectorFiltred);
  console.log(contactsList);
  const dispatch = useDispatch();
  return (
    <div>
      {contactsList.map(item => {
        return (
          <Wrapper key={item.id}>
            {item.name}: {item.phone}
            <StyledBtn onClick={() => dispatch(deleteContacts(item.id))}>
              Delete
            </StyledBtn>
          </Wrapper>
        );
      })}
    </div>
  );
};
