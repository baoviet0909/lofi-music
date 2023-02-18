import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../slices/themeSlice';

const initialState = {
    theme: themeReducer,
};

const store = configureStore({
    reducer: initialState,
});

export default store;
