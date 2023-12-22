import ContactForm from './Contacts/ContactForm';
import Filter from './Filter/FilterContacts';
import ContactList from './ContactsList/ContactList';
import { AppHeader, AppContent, AppContainer } from './App.styled';

export const App = () => {
  return (
    <AppContainer>
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
