
import './App.css';
import PostList from './components/PostList/PostList';
import {posts} from './components/posts.js';
import Navbar from './components/Navbar/Navbar';
//import Scroll from './components/Scroll/Scroll';
import Feed from './components/Feed/Feed';
import SearchField from './components/SearchField/SearchField';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import PostPage from './components/PostPage/PostPage';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import { Component } from 'react';

const initialState = {
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

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  onInputChange = (event)=>{
    //console.log(event.target.value);
    this.setState({input: event.target.value});
  }

  onLogin = ()=>{
    this.setState({route: 'login'});
  }

  registerClick = ()=>{
    this.setState({route: 'register'})
  }

  onLoginClick = (event)=>{
    //console.log(event.target);
    this.setState({route: 'home', isSignedIn: true});
  }

  onHomeClick = ()=>{
    this.setState({route: 'home'});
  }

  setUser = (user)=>{
    this.setState({user: user});
    //console.log(this.state.user);
  }

  onLogout = ()=>{
    this.setState(initialState);
  }

  onPostClick = (event)=>{
    //console.log('post id: ', event.currentTarget.id);
    this.setState({route: 'post', post: posts[event.currentTarget.id-1]});
    window.scrollTo(0, 0);
  }

  onPostReturn = ()=>{
    this.setState({route: 'blog', input: ''});
  }

  render(){
    const filteredPosts = posts.filter((post)=>{
      return  post.summary.toLowerCase().includes(this.state.input.toLowerCase()) || 
              post.title.toLowerCase().includes(this.state.input.toLowerCase()) ||
              post.body.some(el=>el.content.toLowerCase().includes(this.state.input.toLowerCase()));
    });

    const feed = ()=>{
      if(!this.state.user.email) return <Feed registerClick={this.registerClick} />
    }

    const router = ()=>{
      switch(this.state.route){
        case 'home':
              return (
                <div>
                  <Home />
                </div>
              );
        case 'blog':
          return (
                <div>
                  <SearchField onInputChange={this.onInputChange} searchTitle={'Looking for specific content?'}/>
                  <PostList posts={filteredPosts} onPostClick={this.onPostClick} /> 
                </div>
          );
        case 'login':
          return <Login onLoginClick={this.onLoginClick} setUser={this.setUser} registerClick={this.registerClick} />
        case 'register':
          return <Register onLoginClick={this.onLoginClick} />
        default:
          return (
            <div>
              <PostPage post={this.state.post} onPostReturn={this.onPostReturn} />
            </div> 
          );
      }
    }
    return (
      <div className='tc'>
        <Navbar 
          isSignedIn={this.state.isSignedIn} 
          onLogin={this.onLogin} 
          onLogout={this.onLogout}
          onBlog={this.onPostReturn}
          onHome={this.onHomeClick}
          user={this.state.user}
        />
        {feed()}
        {
          router()
        }
        
        <Footer />
      </div>
    );
  }
}

export default App;
