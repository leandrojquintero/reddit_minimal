import { configureStore } from '@reduxjs/toolkit';

//Importing all reducer from each slice.
import searchTermReducer from './features/SearchTerm/searchTermSlice';
import subredditsReducer from './features/Subreddit/subredditsSlice';

export default configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        subreddits: subredditsReducer,
    },
});