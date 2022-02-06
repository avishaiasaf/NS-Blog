import React, { Suspense } from 'react';
import utils from "./components/Utils/Utils";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import 'tachyons';
import About from './components/About/About';
import Home from './components/Home/Home';
import { posts } from './components/posts.js';
// import PostList from './components/PostList/PostList';
const PostListLazy = React.lazy(()=>import('./components/PostList/PostList'));
const PostPageLazy = React.lazy(()=>import('./components/PostPage/PostPage'));


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} >
                  <Route path="/about" element={<About />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/blog" element={
                      <Suspense fallback={<div>Loading...</div>}>
                          <PostListLazy posts={posts}  />
                      </Suspense>
                          } />
                  {
                      posts.map((post, index)=>{
                          // console.log(post)
                          return <Route path={'/blog/' + utils.processRoute(post.title).replaceAll(' ', '-')} element={
                              <Suspense fallback={<div>Loading...</div>}>
                                  <PostPageLazy
                                      post={post}
                                  />
                              </Suspense>
                          } />
                      })
                  }

              </Route>
          </Routes>
        {/*<App className='tc' />*/}
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
