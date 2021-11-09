import React from 'react';
import PostTextElement from '../PostTextElement/PostTextElement';
import PostImageElement from '../PostImageElement/PostImageElement';
import './PostPage.css';

const PostPage = ({ post, onPostReturn })=>{
    return (
        <div className='center w-60'>
            <a href="#" class="no-underline f6 tc db w4 pv3 bg-animate bg-blue hover-bg-dark-blue white br2 right" onClick={onPostReturn}>Return</a>
            <h1>{post.title}</h1>
            <br />
            <h3>By {post.author} - {post.date}</h3>
            <br />
            {/* <p>{post.summary}</p> */}
            {
                post.body.map((element, i)=>{
                    if(post.body[i].type==='text') {
                        return(
                        <PostTextElement text={post.body[i].content} />
                        );
                    }else if(post.body[i].type==='image'){
                        return (
                            <PostImageElement imgSrc={post.body[i].content} />
                        );
                    }else{
                        return
                    }
                })
            }
            
            <a href="#" class="right no-underline f6 tc db w4 pv3 bg-animate bg-blue hover-bg-dark-blue white br2" onClick={onPostReturn}>Return</a>
            <br />
        </div>
    )
}

export default PostPage;