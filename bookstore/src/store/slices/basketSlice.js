import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBook: (state, data) => {
            state[data.payload.id] = data.payload
        },
        removeBook: (state, data) => {
            delete state[data.payload.id];
        }
    }
})

export const { addBook, removeBook } = basketSlice.actions;
export const basketSelector = (state) => state.basket;
export default basketSlice.reducer;