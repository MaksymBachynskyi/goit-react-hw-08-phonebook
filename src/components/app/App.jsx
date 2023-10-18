import { Filter } from 'components/filter/filter.jsx';
import { ContactList } from '../contactList/contactList.jsx';
import { ContactForm } from '../contactForm/contactForm.jsx';
import { Container } from './Layout.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectorContacts,
  selectorError,
  selectorIsLoading,
} from 'redux/selectors.js';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation.js';

export function App() {
  const contacts = useSelector(selectorContacts);
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>

      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
}
