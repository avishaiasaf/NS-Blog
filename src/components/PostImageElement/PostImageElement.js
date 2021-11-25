import React from 'react';

const PostImageElement = ({ imgSrc })=>{
    return (
        <div>
            <img src={imgSrc} className='tc' alt="" width="70%" />
        </div>
    );
}

export default PostImageElement;