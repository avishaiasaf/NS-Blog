import React from 'react';
import './PostCard.css';

const PostCard = ({ title, body, id })=>{
    return (
        <div className='post dib br3 pa3 ma2 grow bw2 shadow-5 tc w-10' id={id}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
}

export default PostCard;