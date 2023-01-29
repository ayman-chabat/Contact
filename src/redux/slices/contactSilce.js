import { createSlice } from '@reduxjs/toolkit'



const contactSlice = createSlice({
    name: 'contacts',
    initialState: [{ 
        user: { id: 0, avatar: `https://api.multiavatar.com/0.png` },
        name: 'Aymane Chabat',
        tel: '0606060606',
        ville: "Tanger"
    }],
    reducers: {
        addContact: (state, action) => {
            const { name, tel, ville, id, pic } = action.payload
            state.push({
                user: {
                    id: id,
                    avatar: pic
                },
                name, tel, ville
            })
        },
        updateContact: (state, action) => {
            const {id, name, tel, ville} = action.payload
            const index = state.findIndex(element => 
                element.user.id == id
            )
            state[index] = {
                user: {
                    id: id,
                    avatar: state[index].user.avatar
                },
                name, 
                tel, 
                ville
            }
        },
        deleteContact: (state, action) => {
            return state.filter(contact => contact.user.id != action.payload.id);
        }
    }
});

export const {
    addContact,
    deleteContact,
    filterContact ,
    updateContact
} = contactSlice.actions;
export default contactSlice.reducer;