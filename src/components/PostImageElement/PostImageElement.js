import React from 'react';

const PostImageElement = ({ imgSrc })=>{
    return (
        <div>
            <img src={imgSrc} className='tc' alt="" />
        </div>
    );
}

export default PostImageElement;