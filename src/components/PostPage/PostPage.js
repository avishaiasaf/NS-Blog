import React from 'react';
import PostTextElement from '../PostTextElement/PostTextElement';
import PostImageElement from '../PostImageElement/PostImageElement';
import './PostPage.css';

const PostPage = ({ post, onPostReturn, resetInput})=>{
    console.log(post);
    return (
        <div className='center w-60'>
            <span className="no-underline f6 tc db w4 pv3 bg-animate bg-blue hover-bg-dark-blue white br2 right pointer" onClick={()=>{onPostReturn('blog'); resetInput()}}>Return</span>
            <h1>{post.title}</h1>
            <br />
            <h3>By {post.author} - {post.date}</h3>
            <br />
            {
                // eslint-disable-next-line
                post.body.map((element, i)=>{
                    if(post.body[i].type==='text') {
                        return(
                        <PostTextElement text={post.body[i].content} />
                        );
                    }else if(post.body[i].type==='image'){
                        return (
                            <PostImageElement imgSrc={post.body[i].content} />
                        );
                    }
                })
            }
            
            <span className="right no-underline f6 tc db w4 pv3 bg-animate bg-blue hover-bg-dark-blue white br2 pointer" onClick={()=>{onPostReturn('blog'); resetInput()}}>Return</span>
            <br />
        </div>
    )
}

export default PostPage;