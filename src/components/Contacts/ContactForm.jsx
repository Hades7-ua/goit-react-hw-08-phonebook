import { useState } from 'react';
import { Form, Input, Button, Label } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [stateForm, setStateForm] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setStateForm({
      ...stateForm,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(stateForm);
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
