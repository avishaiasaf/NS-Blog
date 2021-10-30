
import './App.css';
import PostList from './components/PostList/PostList';
import {posts} from './components/posts.js';
import Navbar from './components/Navbar/Navbar';
import Scroll from './components/Scroll/Scroll';
import Feed from './components/Feed/Feed';
import SearchField from './components/SearchField/SearchField';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import PostPage from './components/PostPage/PostPage';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      posts: [],
      post: '',
      isSignedIn: false,
      route: 'home',
      user: {
        id: '',
        name: '',
        email: '',
        entries: ''
      }
    }
  }

  onInputChange = (event)=>{
    console.log(event.target.value);
    this.setState({input: event.target.value});
  }

  onLogin = ()=>{
    this.setState({route: 'login'});
  }

  onLoginClick = (event)=>{
    console.log(event.target);
    this.setState({route: 'home', isSignedIn: true});
  }

  onLogout = ()=>{
    this.setState({isSignedIn: false});
  }

  onPostClick = (event)=>{
    console.log(event.currentTarget.id);
    this.setState({route: 'post', post: posts[event.currentTarget.id-1]});
  }

  onPostReturn = ()=>{
    this.setState({route: 'home', input: ''});
  }

  render(){
    const filteredPosts = posts.filter((post)=>{
      return post.body.toLocaleLowerCase().includes(this.state.input.toLocaleLowerCase()) || post.title.toLocaleLowerCase().includes(this.state.input.toLocaleLowerCase());
    });

    const router = ()=>{
      switch(this.state.route){
        case 'home':
              return (
                <div>
                  <SearchField onInputChange={this.onInputChange} searchTitle={'Look for content: '}/>
                  <PostList posts={filteredPosts} onPostClick={this.onPostClick} /> 
                </div>
              );
        case 'login':
          return <Login onLoginClick={this.onLoginClick} />
        default:
          return <PostPage post={this.state.post} onPostReturn={this.onPostReturn} />
      }
    }
    return (
      <div className='tc'>
        <Navbar 
          isSignedIn={this.state.isSignedIn} 
          onLogin={this.onLogin} 
          onLogout={this.onLogout}
        />
        <Feed />
        {
          router()
        }
        
        <Footer />
      </div>
    );
  }
}

export default App;

          // this.state.route == 'home' ?
          // <div>
          // <SearchField onInputChange={this.onInputChange} searchTitle={'Look for content: '}/>
          // <PostList posts={filteredPosts} onPostClick={this.onPostClick} /> 
          // </div> : (
          //   this.state.route == 'login' ?
          //   <Login onLoginClick={this.onLoginClick} /> :
          //   <PostPage post={this.state.post} />
          // )