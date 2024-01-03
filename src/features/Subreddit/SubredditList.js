import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSubredditsList, getSubredditsList, loadingSubredditsList } from './subredditsSlice';

export default function SubredditList ()  {
    const dispatch = useDispatch();
    const subredditList = useSelector(selectSubredditsList);
    const isLoadingSubredditsList =  useSelector(loadingSubredditsList);
    useEffect(() => {
        dispatch(getSubredditsList());
    },[dispatch]);

    if(isLoadingSubredditsList) {
        return  <div id="reddit-list"> Loadding list ...</div>
    }
    return (
        <div id="reddit-list">
           <h2>Subreddits List</h2> 
           <ul id="unorder-reddit-list">
             {subredditList.map((subreddit) => (
                <li>{subreddit}</li>
              ))} 
           </ul>
        </div>
    );

}