import { createSlice } from '@reduxjs/toolkit';

const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: '',
    reducers: {
        setSearchTerm: (state, action) => action.payload,
        clearSearchTerm: (state) => '',
    },
});


//Selector
export const selectSearchTerm = (state) => state.searchTerm;

//Action Creator
export const { clearSearchTerm, setSearchTerm } = searchTermSlice.actions;

// Reducer
export default searchTermSlice.reducer;

