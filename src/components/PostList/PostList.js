import React from 'react';
import Post from '../PostCard/PostCard';

const PostList = ({posts, onPostClick})=>{
    return (
        <div className='w-80 center'>
            <section className="mw8 w-80 center">
            <h2 className="baskerville fw1 ph3 ph0-l">Recently Posted</h2>
            {
                posts.map((post, i)=>{
                    return (
                        
                        <Post 
                        title={posts[i].title}
                        summary={posts[i].summary}
                        body={posts[i].body}
                        author={posts[i].author}
                        id={posts[i].id}
                        onPostClick={onPostClick}
                        img={posts[i].img}
                        date={posts[i].date}
                        key={i}
                        />
                        
                    );
                })
            }
            </section>
        </div>
    );
}

export default PostList;