import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operation';
import ContactsAdd from 'components/contsctForm.jsx/contactAdd';
import Contacts from 'components/myContacts.js/contacts';
import { Filter } from 'components/filter';

export default function Tasks() {
  const dispatch = useDispatch();
  const a = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactsAdd />
      {a && <p>Loading...</p>}
      <Filter />
      <Contacts />
    </div>
  );
}
