import { useState } from 'react';
import { Form, Input, Button, Label, FormContact } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContactsList } from '../../redux/contacts/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  console.log(contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
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
      dispatch(addContact({ name: name, number: number }));
      setNumber('');
      setName('');
    }
  };
  return (
    <FormContact>
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
    </FormContact>
  );
};

export default ContactForm;
