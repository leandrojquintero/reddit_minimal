export const API_ROOT = 'https://www.reddit.com/';

export const fetchRedditPosts = async (subreddits) => {
    try {
        const response = await fetch(`${API_ROOT}r/${subreddits}.json`);
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        return json.data.children.map((post) => post.data);
    
    } catch (error) {
        throw error;
    }

};


export const fetchSubreddits = async () => {
    try {
        const response = await fetch(`${API_ROOT}subreddits.json`);
        if (!response.ok) throw new Error('Error fetching subreddits');
        const json = await response.json();
        return json.data.children.map((subreddit) => subreddit.data);

    } catch (error) {
        throw error;
    }
};

export const fetchPostComment = async (permalink) => {
    try {
        const response = await fetch(`${API_ROOT}${permalink}.json`);
        if (!response.ok) throw new Error('Error fetching post comment');
        const json = await response.json();
        return json[1].data.children.map((subreddit) => subreddit.data);

    } catch (error) {
        throw error;
    }
};
