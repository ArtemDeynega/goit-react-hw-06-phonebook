import { useSelector } from 'react-redux';
import { getFilterContacts } from 'redux/filter';
import { InputLabel, Item } from './ContactList.styled';
import { ContactListItem } from './ContactListItem';
import { Filter } from 'components/Filter';

export const ContactList = () => {
  const contactsFilter = useSelector(getFilterContacts);

  return (
    <>
      <InputLabel>Find contacts by name</InputLabel>
      <Item>
        <Filter />
        {contactsFilter.map(({ name, number, id }) => (
          <ContactListItem id={id} key={id} name={name} number={number} />
        ))}
      </Item>
    </>
  );
};
