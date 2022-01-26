import React from 'react';
import PostTextElement from '../PostTextElement/PostTextElement';

const Home = ({ blogName })=>{
    return (
        <div className='center w-60 tc' >
            <h1>Home</h1>
            <PostTextElement text={`
                
                
            `} />
        {/*    Welcome to ${blogName}! */}
        </div>
    );
}

export default Home;