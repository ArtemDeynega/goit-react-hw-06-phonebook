import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts';
import { ListItem, Button } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    return dispatch(deleteContact(id));
  };

  return (
    <ListItem>
      {name && (
        <>
          {name} : {number}
          <Button type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </Button>
        </>
      )}
    </ListItem>
  );
};
