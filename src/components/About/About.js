import React from 'react';
// import about_me from '../../images/about-me.jpg';
import PostTextElement from '../PostTextElement/PostTextElement';

const About = ()=>{
    return (
        <div className='center w-60' >
            <h1>About</h1>
            {/*<img src={ about_me } alt='About Pic' align={'left'} width="20%" style={{paddingRight: '30px'}} />*/}
            <PostTextElement text={`

            `} />
        </div>
    );
}

export default About;