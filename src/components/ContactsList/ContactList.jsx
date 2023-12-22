import React from 'react';

import {
  ContactListWrapper,
  ContactListItem,
  ContactName,
  ContactNumber,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getContactsList, getFilters } from '../../redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsList);
  const filter = useSelector(getFilters);
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();
  const handleDelete = id => {
    dispatch(deleteContact(id));
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
