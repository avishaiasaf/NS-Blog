
import './App.css';
import PostList from './PostList';
import {posts} from './posts.js';
import Navbar from './Navbar';
import Scroll from './Scroll';
import Feed from './Feed';

function App() {
  return (
    <div className='tc'>
      <Navbar />
      <Feed />
      <Scroll >
      <PostList posts={posts} />
      </Scroll>
    </div>
   
  );
}

export default App;
