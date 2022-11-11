import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Input, FormButton, Label } from './ContactForm.styled';
import { useState } from 'react';

export default function ContactForm({ onSubmit }) {
  const [state, setState] = useState({
    name: '',
    number: '',
  });
  const name = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = state;
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setState({ name: '', number: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          id={name}
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Rosie Simpson"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number:
        <Input
          id={name}
          type="tel"
          name="number"
          value={state.number}
          placeholder="459-12-56"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
}

ContactForm.prototypes = {
  onSubmit: PropTypes.func.isRequired,
};
