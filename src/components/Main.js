import React from 'react';

import Post from '../features/Post/Post'
import SubredditList  from '../features/Subreddit/SubredditList';


export default function Main() {
    
    return (
        <main className='main'>
           <Post />
           <SubredditList />
        </main>
    );
}