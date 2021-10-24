import React from 'react';
import Post from './PostCard';

const PostList = ({posts})=>{
    return (
        <div className='tc'>
            {
                posts.map((post, i)=>{
                    return (
                        <Post 
                        title={posts[i].title}
                        body={posts[i].body}
                        id={posts[i].id}
                        />
                    );
                })
            }
        </div>
    );
}

export default PostList;