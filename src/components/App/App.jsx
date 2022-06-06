import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from 'Styles/GlobalStyles/GlobalStyles';
import { ContactEditor } from 'components/ContactEditor';
import { SectionTitle } from 'components/Title';
import { ContactList } from 'components/ContactList';

export const App = () => {
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
