import React from 'react';

export default function Post () {
    const postAuthor = '';
    const postTitle = '';
    const postImageUrl = '';

    return (
        <article className="post-section">
           <h4 id="post-author">Post by <span>{postAuthor}</span></h4> 
           <h3 id="post-title">{postTitle}</h3>
           <img id="post-image" alt='' src={postImageUrl}/>
           <hr/>
           <h6 id="vote">Comp-Vote</h6>
           <h6 id="message">Comp-Message</h6>
           <h6 id="share">Comp-Share</h6>
        </article>
    );
};