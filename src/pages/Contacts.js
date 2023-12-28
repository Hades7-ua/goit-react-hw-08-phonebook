import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from '../components/ContactsList/ContactList';
import { FilterContacts } from '../components/Filter/FilterContacts';

import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';
import { ContactForm } from '../components/Contacts/ContactForm';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <title>Your contacts</title>
        <ContactForm />
        <div>{isLoading && 'Request in progress...'}</div>
        <FilterContacts />
        <ContactList />
      </div>
    </>
  );
}
