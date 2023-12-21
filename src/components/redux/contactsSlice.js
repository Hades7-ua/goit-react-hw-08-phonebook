import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.list.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
    contactsFilters: (state, action) => {
      state.filter = action.payload;
    },
  },
});
console.log(contactsSlice);
export const { addContact, deleteContact, contactsFilters } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
