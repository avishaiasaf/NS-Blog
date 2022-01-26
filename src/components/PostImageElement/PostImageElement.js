import React from 'react';

const PostImageElement = ({ imgSrc })=>{
    return (
        <div>
            <img src={imgSrc} className='tc' alt="" width="70%" style={{border: '3px solid #357edd'}} />
        </div>
    );
}

export default PostImageElement;