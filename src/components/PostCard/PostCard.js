import React from 'react';
import './PostCard.css';

const PostCard = ({ title, summary, body, author, id })=>{
    return (
        <article className="bb b--black-10 dib br3 pa3 ma2 grow bw2 shadow-1" id={id}>
        <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
          <div className="flex flex-column flex-row-ns">
            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
              <img src="http://mrmrs.github.io/photos/whale.jpg" className="db" alt="Photo of a whale's tale coming crashing out of the water." />
            </div>
            <div className="w-100 w-60-ns pl3-ns">
              <h1 className="f3 fw1 baskerville mt0 lh-title">{title}</h1>
              <p className="f6 f5-l lh-copy">
                {summary}
              </p>
              <p className="f6 lh-copy mv0">By {author}</p>
            </div>
          </div>
        </a>
      </article>
    );
}

export default PostCard;

        // <div classNameName='post dib br3 pa3 ma2 grow bw2 shadow-5 tc w5' id={id}>
        //     <h2>{title}</h2>
        //     <p>{body}</p>
        // </div>