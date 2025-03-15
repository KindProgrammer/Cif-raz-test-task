import { configureStore } from '@reduxjs/toolkit';
import basketReduser from './slices/basketSlice';

const store = configureStore({
    reducer: {
        basket: basketReduser
    }
});

export default store;