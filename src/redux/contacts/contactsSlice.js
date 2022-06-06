import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const initialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      const newContact = {
        ...payload,
        id: shortid.generate(),
      };
      return [...state, newContact];
    },
    deleteContact: (state, { payload }) => {
      return state.filter(state => state.id !== payload);
    },
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
