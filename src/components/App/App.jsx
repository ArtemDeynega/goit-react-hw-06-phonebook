import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from 'Styles/GlobalStyles/GlobalStyles';
import { ContactEditor } from 'components/ContactEditor';
import { SectionTitle } from 'components/Title';
import { ContactList } from 'components/ContactList';
import { getContact } from 'redux/contacts';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getContact);
  console.log(contacts);
  return (
    <>
      <SectionTitle title="Phonebook">
        <ContactEditor />
      </SectionTitle>
      <SectionTitle title="Contacts">
        <ContactList />
      </SectionTitle>

      <ToastContainer />
      <GlobalStyles />
    </>
  );
};
