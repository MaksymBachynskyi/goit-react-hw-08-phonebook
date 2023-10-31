import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from '../operation';
import { toast } from 'react-toastify';
export const sliceContacts = createSlice({
  name: 'contacts',
  initialState: { list: [], isLoading: false, error: null },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list.push(action.payload);
        toast('New Contact Added');
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.list.findIndex(
          contact => contact.id === action.payload.id
        );
        state.list.splice(index, 1);
        toast('Contact Deleted');
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
