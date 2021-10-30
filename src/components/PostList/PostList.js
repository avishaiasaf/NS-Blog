import React from 'react';
import Post from '../PostCard/PostCard';

const PostList = ({posts})=>{
    return (
        <div className='tc'>
            <section class="mw7 center avenir">
            <h2 className="baskerville fw1 ph3 ph0-l">News</h2>
            {
                posts.map((post, i)=>{
                    return (
                        
                        <Post 
                        title={posts[i].title}
                        summary={posts[i].summary}
                        body={posts[i].body}
                        author={posts[i].author}
                        id={posts[i].id}
                        />
                        
                    );
                })
            }
            </section>
        </div>
    );
}

export default PostList;