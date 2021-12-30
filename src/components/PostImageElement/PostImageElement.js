import React from 'react';

const PostImageElement = ({ imgSrc })=>{
    return (
        <div>
            <img src={imgSrc} className='tc' alt="" width="70%" style={{border: '5px solid black;'}} />
        </div>
    );
}

export default PostImageElement;