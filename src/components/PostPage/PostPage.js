import React from 'react';

const PostPage = ({ post, onPostReturn })=>{
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.summary}</p>
            {
                // post.body.map((el)=>{
                //     el.includes('img') ? <img src={el} /> : <p>{el}</p>
                // })
            }
            <p>{post.author}</p>
            <a href="#" class="center no-underline f6 tc db w4 pv3 bg-animate bg-blue hover-bg-dark-blue white br2" onClick={onPostReturn}>Return</a>
        </div>
    )
}

export default PostPage;