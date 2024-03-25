import { createSlice, nanoid } from '@reduxjs/toolkit';

const cantactsInitialState = [
  { id: "1111", username: "Rosie Simpson", number: "459-12-56" },
  { id: "222", username: "Hermione Kline", number: "443-89-12" },
  { id: "333", username: "Eden Clements", number: "645-17-79" },
  { id: "444", username: "Annie Copeland", number: "227-91-26" },
];
const contactsSlice = createSlice({
    name: 'contacts',
   initialState: {
      items: cantactsInitialState,
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(contact) {
                return {
                    payload: {
                        id: nanoid(),
                        username: contact.username,
                        number: contact.number,
                    },
                };
            },
        },
        deleteContact: (state, action) => {
            const index = state.items.findIndex(contact => contact.id === action.payload);
            state.items.splice(index, 1);
        },
        
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;