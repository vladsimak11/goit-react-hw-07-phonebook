import { createSlice, nanoid } from "@reduxjs/toolkit"; 
import { toast } from 'react-toastify';
// Add and delete contacts

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
]

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.unshift(action.payload);

      toast.success('Add contact', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      
      },

      prepare({name, number}) { 
        return {
          payload: {
            id: nanoid(), 
            name,
            number,
          },
        };
      }
    },

    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);

      toast.error('Delete contact', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  },
});

export const { addContact, deleteContact } =  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;