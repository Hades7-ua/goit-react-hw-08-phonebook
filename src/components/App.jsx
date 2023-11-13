import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Contacts/ContactForm';
import Filter from './Filter/FilterContacts';
import ContactList from './ContactsList/ContactList';
import { AppHeader, AppContent, AppContainer } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const getContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(getContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
    console.log(parsedContacts);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const toLowerCaseName = name.toLowerCase();
    const isNameThis = this.state.contacts.find(
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
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <AppContainer>
        <AppHeader>Phonebook</AppHeader>
        <AppContent>
          <ContactForm onSubmit={this.addContact} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.handleDelete}
          />
        </AppContent>
      </AppContainer>
    );
  }
}

export default App;
