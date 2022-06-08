export const getFilter = store => store.filter;

export const getFilterContacts = store => {
  if (store.filter === '') {
    return store.contacts;
  }
  const filterValueToLowerCase = store.filter.toLowerCase();
  return store.contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValueToLowerCase)
  );
};
