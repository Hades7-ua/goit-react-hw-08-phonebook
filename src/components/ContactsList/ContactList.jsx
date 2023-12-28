import React from 'react';

import {
  ContactListWrapper,
  ContactListItem,
  ContactName,
  ContactNumber,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContactsList, selectFilters } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
 
  const filter = useSelector(selectFilters);
  console.log(filter)
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();
  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <ContactListWrapper>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id}>
          <div>
            <ContactName>{contact.name}</ContactName>{' '}
            <ContactNumber>{contact.number}</ContactNumber>
          </div>
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </ContactListItem>
      ))}
    </ContactListWrapper>
  );
};

export default ContactList;
