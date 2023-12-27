import { configureStore } from '@reduxjs/toolkit';

//Importing all reducer from each slice.
import searchTermReducer from './features/SearchTerm/searchTermSlice';

export const store = configureStore({
    reducer: {
        searchTerm: searchTermReducer,
    },
});