import { useState } from 'react';
import { addContact, getContact } from 'redux/contacts';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Label, Input, Button } from './ContactEditor.styled';
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  number: '',
};

export const ContactEditor = () => {
  const [contactState, setContactState] = useState(initialState);

  const contacts = useSelector(getContact);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setContactState({
      ...contactState,
      [target.name]: target.value.trim(),
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const name = contactState.name.toLowerCase();
    contacts.find(contact => contact.name === name)
      ? toast.warn('Такой пользователь уже есть 🤪 ', {
          position: 'top-center',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      : dispatch(addContact(contactState));
    setContactState(initialState);
  };

  return (
    <>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Label htmlFor={'name'}>
          Name
          <Input
            type="text"
            name="name"
            value={contactState.name}
            onChange={handleChange}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={'number'}>
          Phone
          <Input
            type="tel"
            name="number"
            value={contactState.number}
            placeholder="Enter phone"
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};
