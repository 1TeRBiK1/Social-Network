import React from 'react';
import cls from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () =>{
    return (
        <div>
            <span>My posts</span>
            <div>
                <textarea placeholder="anything new"></textarea>
                <button>add post</button>
            </div>
            <div className={cls.posts}>
                <Post message="How are you?" likesCount="5"/>
                <Post message="Hi, guys!" likesCount="10"/>
            </div>
        </div>
    );
}

export default MyPosts;