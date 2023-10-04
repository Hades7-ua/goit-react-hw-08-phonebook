import { Component } from 'react';
import { Form, Input, Button, Label } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="">
          Name
          <Input
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Label>
        <Label htmlFor="">
          Number
          <Input
            type="tel"
            name="number"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
