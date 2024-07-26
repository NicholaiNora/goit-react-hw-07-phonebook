import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { fetchContacts, addContact, deleteContact } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
      items: [],
      isLoading: false,
      error: null,
  },
  reducers: {
    // addContact: {
    //   reducer: (state, action) => {
    //     state.initialContacts.push(action.payload);
    //   },
    //   // prepare: (name, number) => {
    //   //     return {
    //   //         payload: {
    //   //             id: nanoid(),
    //   //             name,
    //   //             number,
    //   //         }
    //   //     }
    //   // }
    // },
    // deleteContact: {
    //   reducer: (state, action) => {
    //     const index = state.initialContacts.findIndex(
    //       contact => contact.id === action.payload
    //     );
    //     if (index !== -1) {
    //       state.initialContacts.splice(index, 1);
    //     }
    //   },
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.erorr = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.erorr = action.payload;
      });
  },
});

export default contactsSlice.reducer;
