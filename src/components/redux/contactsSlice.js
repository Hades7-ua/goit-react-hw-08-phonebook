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
    filtersContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filtersContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
console.log(contactsReducer);