
import './App.css';
import PostList from './components/PostList/PostList';
import {posts} from './components/posts.js';
import Navbar from './components/Navbar/Navbar';
import Scroll from './components/Scroll/Scroll';
import Feed from './components/Feed/Feed';
import SearchField from './components/SearchField/SearchField';
import Footer from './components/Footer/Footer';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      posts: []
    }
  }

  onInputChange = (event)=>{
    console.log(event.target.value);
    this.setState({input: event.target.value});
  }

  render(){
    const filteredPosts = posts.filter((post)=>{
      return post.body.toLocaleLowerCase().includes(this.state.input.toLocaleLowerCase()) || post.title.toLocaleLowerCase().includes(this.state.input.toLocaleLowerCase());
    });
    return (
      <div className='tc'>
        <Navbar />
        <Feed />
        <SearchField onInputChange={this.onInputChange} searchTitle={'Look for specific post: '}/>
        {/* <Scroll > */}
        <PostList posts={filteredPosts} />
        {/* </Scroll> */}
        <Footer />
      </div>
    );
  }
}

export default App;
