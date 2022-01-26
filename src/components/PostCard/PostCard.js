import React from 'react';
import './PostCard.css';

//br1 dib grow shadow-1 ma2 center

const summaryShape = (summary)=>{
  const len = 150;
  return summary.length > len ? summary.substr(0, len) + '...' : summary;
}

const PostCard = ({ title, summary, body, author, id, onPostClick, img, date })=>{
    return (
      <article className="ma3 dit-l br1 grow shadow-1 tc pointer" style={{width:'17rem'}} id={id} onClick={onPostClick}>
        <div className="h3 dib">
          <img src={img} className="h4 dib" alt=""  />
        </div>

      <div className="pa2 ph3-ns pb3-ns h5">
        <div className="dt w-100 mt1">
          <div className="dtc">
            <h1 className="f5 f4-ns mv0">{title}</h1>
          </div>
          <div className="dtc tr">
            
          </div>
        </div>
        <p className="f6 lh-copy measure mt2 mid-gray">
          {summaryShape(summary)}
        </p>
        <h5 className=" mv0">{author} - {date}</h5>
      </div>
    </article>
    );
}

export default PostCard;

        // <div classNameNameName='post dib br3 pa3 ma2 grow bw2 shadow-5 tc w5' id={id}>
        //     <h2>{title}</h2>
        //     <p>{body}</p>
        // </div>

      //   <article classNameName="bb b--black-10 dib br3 pa3 ma2 grow bw2 shadow-1" id={id} onClick={onPostClick}>
      //   <a classNameName="db pv4 ph3 ph0-l no-underline black dim" href="#0">
      //     <div classNameName="flex flex-column flex-row-ns">
      //       <div classNameName="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      //         <img src={img} classNameName="db" alt="Photo of a whale's tale coming crashing out of the water." />
      //       </div>
      //       <div classNameName="w-100 w-60-ns pl3-ns" id={id} >
      //         <h1 classNameName="f3 fw1 baskerville mt0 lh-title">{title}</h1>
      //         <p classNameName="f6 f5-l lh-copy">
      //           {summary}
      //         </p>
      //         <p classNameName="f6 lh-copy mv0">By {author}</p>
      //       </div>
      //     </div>
      //   </a>
      // </article>