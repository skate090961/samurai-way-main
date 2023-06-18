import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
            <Post message={'Hi! How are you?'}/>
            <Post message={`Hey! It's my first post!`}/>
        </div>
    );
};
