import React from 'react';
import PostTextElement from '../PostTextElement/PostTextElement';
import { Link } from "react-router-dom";
import utils from "../Utils/Utils";
import {posts} from "../posts";
import Post from "../PostCard/PostCard";
const post = posts[posts.length-1];
const Home = ({ blogName })=>{
    return (
        <div className='center w-60 tc' >
            <h1>Home</h1>
            <PostTextElement text={`
                *What's new in ${utils.blogName}*:     
            `} />
            <div className="w-90 ma3 dit-l br1 shadow-1 tc pa4">
                <div className="tl">
                    <PostTextElement text={`
                        *Most recent post*     
                    `} />
                </div>
                <br />
                {
                    <Link to={{pathname: `/blog/${utils.processRoute(post.title)}`}} >
                        <Post
                            title={post.title}
                            summary={post.summary}
                            body={post.body}
                            author={post.author}
                            id={post.id}
                            img={post.img}
                            date={post.date}
                            key={post.id}
                        />
                    </Link>
                }
            </div>

        {/*    Welcome to ${blogName}! */}
        </div>
    );
}

export default Home;