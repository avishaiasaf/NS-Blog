import React from 'react';

function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => {
        if(str.match(/\*([^*]*)\*/)){
            console.log('match');
            return <p className='f3 lh-copy w-100 tl'><strong>{str.replace(/\*/g,'')}</strong></p>
        }else{
            return <p className='f3 lh-copy w-100 tl'>{str}</p>
        }
    });
  }

const PostTextElement = ( {text} )=>{
    return (
        <div>
           <NewlineText text={text}  />
            {/* <p className='f3 lh-copy w-100 tl'>{text}</p> */}
        </div>
    );
}

export default PostTextElement;