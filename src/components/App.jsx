import ContactForm from './Contacts/ContactForm';
import Filter from './Filter/FilterContacts';
import ContactList from './ContactsList/ContactList';
import { AppHeader, AppContent, AppContainer } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';
import { selectIsLoading, selectError } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <AppContainer>
      {loading && !error && (
        <b>The request is being processed, it will take a few seconds.....</b>
      )}
      <AppHeader>Phonebook</AppHeader>
      <AppContent>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </AppContent>
    </AppContainer>
  );
};

export default App;
