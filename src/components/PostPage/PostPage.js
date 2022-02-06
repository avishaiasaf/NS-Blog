import React from 'react';
import PostTextElement from '../PostTextElement/PostTextElement';
import PostImageElement from '../PostImageElement/PostImageElement';
import { Link } from "react-router-dom";
import './PostPage.css';

const PostPage = ({ post, onPostReturn, resetInput})=>{
    console.log(post);
    return (
        <div className='w8 br2 ba shadow-1 center w-60 b--light-blue pa4'>
            <div className="tr right">
                <Link to="/blog" className="link dim dark-gray f6 f5-ns dib pointer grow blue b">Return</Link>
            </div>
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
            <div className="tr right">
                <Link to="/blog" className="link dim dark-gray f6 f5-ns dib pointer grow blue b">Return</Link>
            </div>
            <br />
        </div>
    )
}

export default PostPage;