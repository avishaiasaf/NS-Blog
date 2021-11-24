
import './App.css';
import PostList from './components/PostList/PostList';
import Navbar from './components/Navbar/Navbar';
//import Scroll from './components/Scroll/Scroll';
import Feed from './components/Feed/Feed';
import SearchField from './components/SearchField/SearchField';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import PostPage from './components/PostPage/PostPage';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import SolutionCatalog from './components/SolutionCatalog/SolutionCatalog';
import { Component } from 'react';
import { solutions } from './components/solutions.js';
import { posts } from './components/posts.js';
import SolutionPage from './components/SolutionPage/SolutionPage';

const initialState = {
  input: '',
      posts: [],
      post: '',
      soltion: '',
      isSignedIn: false,
      route: 'home',
      user: {
        id: '',
        name: '',
        email: '',
        entries: ''
      }
}

// const initialState = {
//   input: '',
//       posts: [],
//       post: '',
//       soltion: '',
//       isSignedIn: !LOGGED ? false : true,
//       route: 'home',
//       user: !LOGGED ? {
//         id: '',
//         name: '',
//         email: '',
//         entries: ''
//       } : {
//         id: '1',
//         name: 'Avishai',
//         email: 'avish.asaf@gmail.com',
//         entries: '1'
//       }
// }

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      posts: [],
      post: '',
      solution: '',
      isSignedIn: true,
      route: 'home',
      component: '',
      user: {
        id: '1',
        name: 'Avishai',
        email: 'avish.asaf@gmail.com',
        entries: ''
      }
    }

    // if(this.state.route === 'blog'){
    //   import('./components/PostList/PostList').then((Blog)=>{
    //     console.log(Blog);
    //     this.setState({route: route, component: Blog.default});
    //   });
    // }
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

  onCatalogClick = ()=>{
    this.setState({route: 'catalog'});
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

  onSolutionClick = (event)=>{
    // console.log('solution id: ', event.currentTarget.id);
    this.setState({route: 'solution', solution: solutions[event.currentTarget.id-1]});
    window.scrollTo(0, 0);
  }

  onPostReturn = ()=>{
    this.setState({route: 'blog', input: ''});
  }

  onSolutionReturn = () =>{
    this.setState({route: 'catalog'});
  }

  onFileClick = (ref) =>{
    console.log('Download file ', ref, this.state.user);
    
  }

  render(){

    const filteredPosts = posts.filter((post)=>{
      return  post.summary.toLowerCase().includes(this.state.input.toLowerCase()) || 
              post.title.toLowerCase().includes(this.state.input.toLowerCase()) ||
              post.body.some(el=>el.content.toLowerCase().includes(this.state.input.toLowerCase()));
    });

    const filteredSolutions = solutions.filter((solution)=>{
      return  solution.title.toLocaleLowerCase().includes(this.state.input.toLocaleLowerCase()) || 
              solution.summary.toLocaleLowerCase().includes(this.state.input.toLocaleLowerCase()) ||
              solution.body.toLocaleLowerCase().includes(this.state.input.toLocaleLowerCase())
    })

    // const feed = ()=>{
    //   if(!this.state.user.email) return <Feed isSignedIn={this.state.isSignedIn} registerClick={this.registerClick} />
    // }

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
            // <this.state.component />
                <div>
                  <SearchField onInputChange={this.onInputChange} searchTitle={'Looking for specific content?'}/>
                  <PostList posts={filteredPosts} onPostClick={this.onPostClick} /> 
                </div>
          );
        case 'login':
          return <Login onLoginClick={this.onLoginClick} setUser={this.setUser} registerClick={this.registerClick} />
        case 'register':
          return <Register onLoginClick={this.onLoginClick} />
        case 'post':
          return (
            <div>
              <PostPage post={this.state.post} onPostReturn={this.onPostReturn} />
            </div> 
          );
        case 'catalog':
          return (
            <div>
              <SearchField onInputChange={this.onInputChange} searchTitle={'Looking for specific content?'}/>
              <SolutionCatalog 
                isSignedIn={this.state.isSignedIn} 
                onSolutionClick={this.onSolutionClick}
                solutions={filteredSolutions}
              />
            </div>
          )
        case 'solution':
          return (
            <SolutionPage
              solution={this.state.solution}
              onSolutionReturn={this.onSolutionReturn}
              onFileClick={this.onFileClick}
            />
          )
        default:
          return (
            <div>
              Page Not Found
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
          onCatalogClick={this.onCatalogClick}
        />
        
        {/* {feed()} */}
        <Feed 
          isSignedIn={this.state.isSignedIn} 
          registerClick={this.registerClick} 
          onSolutionClick={this.onCatalogClick}
        />
        {router()}
        <Footer />
      </div>
    );
  }
}

export default App;
