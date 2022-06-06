import { useSelector } from 'react-redux';
import { getContact } from 'redux/contacts';
import { InputLabel, InputFilter, Item } from './ContactList.styled';
import { ContactListItem } from './ContactListItem';
export const ContactList = () => {
  const contacts = useSelector(getContact);

  return (
    <>
      <InputLabel>Find contacts by name</InputLabel>
      <Item>
        {contacts.map(({ name, number, id }) => (
          <ContactListItem id={id} key={id} name={name} number={number} />
        ))}
      </Item>
    </>
  );
};

/* <InputFilter
          type="text"
          value={value}
          onChange={onChangeFiter}
          placeholder="Enter name"
        /> */
