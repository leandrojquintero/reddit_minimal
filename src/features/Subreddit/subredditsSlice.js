import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSubreddits } from '../../api/api-reddit'

export const getSubredditsList = createAsyncThunk('subreddits/getSubredditsList', 
async () => {
   const data = await fetchSubreddits();
   return data.map((subreddit) => subreddit.display_name);
   
});

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        list: [],
        isLoadingSubredditsList: false,
        hasErrorSubredditsList: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase( getSubredditsList.pending, (state) => {
            state.isLoadingSubredditsList =true;
            state.hasErrorSubredditsList = false;
        }).addCase(getSubredditsList.fulfilled, (state, action) => {
            state.isLoadingSubredditsList =false;
            state.hasErrorSubredditsList = false;
            state.list = action.payload;
        }).addCase(getSubredditsList.rejected, (state) => {
            state.isLoadingSubredditsList = false;
            state.hasErrorSubredditsList = true;
        });
    },
});

//Selector
export const selectSubredditsList = (state) => state.subreddits.list;
export const loadingSubredditsList = (state) => state.subreddits.isLoadingSubredditsList;

//Reducer
export default subredditsSlice.reducer;