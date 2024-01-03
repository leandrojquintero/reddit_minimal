import { createSlice } from '@reduxjs/toolkit';

const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: '',
    reducers: {
        setSearchTerm: (state, action) => action.payload,
    },
});


//Selector
export const selectSearchTerm = (state) => state.searchTerm;

//Action Creator
export const { setSearchTerm } = searchTermSlice.actions;

// Reducer
export default searchTermSlice.reducer;

