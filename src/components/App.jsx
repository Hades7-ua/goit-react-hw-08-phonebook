import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Contacts/ContactForm';
import Filter from './Filter/FilterContacts';
import ContactList from './ContactsList/ContactList';
import { AppHeader, AppContent, AppContainer } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(getContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  // componentDidMount() {
  //   const getContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(getContacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  //   console.log(parsedContacts);
  // }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  const addContact = ({ name, number }) => {
    const toLowerCaseName = name.toLowerCase();
    const isNameThis = contacts.find(
      contact => contact.name.toLowerCase() === toLowerCaseName
    );

    if (isNameThis) {
      alert(`${name} is already in contacts.`);
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const handleDelete = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <AppContainer>
      <AppHeader>Phonebook</AppHeader>
      <AppContent>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDelete}
        />
      </AppContent>
    </AppContainer>
  );
};

export default App;
