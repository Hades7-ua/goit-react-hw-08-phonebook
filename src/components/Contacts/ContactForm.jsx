import { useState } from 'react';
import { Form, Input, Button, Label } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'components/redux/contactsSlice';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.list);
  // console.log(contacts);

  const [stateForm, setStateForm] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setStateForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();

    const toLowerCaseName = name.toLowerCase();
    const isNameThis = contacts.find(
      contact => contact.name.toLowerCase() === toLowerCaseName
    );

    if (isNameThis) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ id: nanoid(), name, number }));
    }
    setStateForm({ name: '', number: '' });
  };
  const { name, number } = stateForm;
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="">
        Number
        <Input
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

export default ContactForm;
