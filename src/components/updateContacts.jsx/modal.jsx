import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateContacts } from 'redux/operation';
import { StyledBtn } from '../contsctForm.jsx/contactAddStyled';
import { selectorContacts } from 'redux/selectors';
import {
  StyledInputUpdate,
  StyledItemUpdate,
  StyledWrapUpdate,
} from './styledModal';

export const ModalEl = ({ onToogelModal, user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);

  const onSubmit = e => {
    e.preventDefault();
    const element = e.target.elements;
    const newData = {
      name: element.name.value,
      number: element.phone.value,
      id: user.id,
    };
    const isIcluded = contacts.some(
      item =>
        item.name.toLocaleLowerCase() === newData.name.toLocaleLowerCase() &&
        item.number === newData.number
    );
    if (isIcluded) {
      alert(`${newData.name} is alredy in contacts`);
      return;
    }
    dispatch(updateContacts(newData));
    alert('The changes were successful');
    navigate('/login');
  };

  return (
    <Modal
      appElement={document.getElementById('root') || undefined}
      isOpen={user ? true : false}
      onRequestClose={() => onToogelModal('')}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'black',
        },
        content: {
          position: 'absolute',
          top: '40px',
          left: '40px',
          right: '40px',
          bottom: '40px',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
        },
      }}
    >
      <StyledWrapUpdate onSubmit={onSubmit}>
        <StyledItemUpdate>
          <StyledInputUpdate
            type="text"
            name="name"
            defaultValue={user.name}
            minLength={2}
            required={true}
          />
          <StyledInputUpdate
            type="phone"
            name="phone"
            defaultValue={user.number}
            pattern="[0-9]*"
            inputMode="numeric"
            required={true}
            minLength={6}
            maxLength={16}
          />
          <StyledBtn type="submit">Save</StyledBtn>
        </StyledItemUpdate>
      </StyledWrapUpdate>
    </Modal>
  );
};
