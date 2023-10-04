import React from 'react';

import {
  ContactListWrapper,
  ContactListItem,
  ContactName,
  ContactNumber,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListWrapper>
      {contacts.map(contact => (
        <ContactListItem key={contact.id}>
          <div>
            <ContactName>{contact.name}</ContactName>{' '}
            <ContactNumber>{contact.number}</ContactNumber>
          </div>
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </ContactListItem>
      ))}
    </ContactListWrapper>
  );
};

export default ContactList;
