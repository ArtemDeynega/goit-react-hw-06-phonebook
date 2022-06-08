import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts';
import { filterSlice } from './filter/felterSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
