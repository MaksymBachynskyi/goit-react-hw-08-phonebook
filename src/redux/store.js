import { configureStore } from '@reduxjs/toolkit';
import sliceContacts from './sliceContacts';
import { filterReducer } from './sliceFilter';

export const store = configureStore({
  reducer: {
    contacts: sliceContacts,
    filter: filterReducer,
  },
});
