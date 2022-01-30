import './App.css';
import Navbar from './components/Navbar/Navbar';
import Feed from './components/Feed/Feed';
import SearchField from './components/SearchField/SearchField';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import React, { Component, Suspense } from 'react';
import { solutions } from './components/solutions.js';
import { posts } from './components/posts.js';

//Lazy load Components
const PostListLazy = React.lazy(()=>import('./components/PostList/PostList'));
const SolutionCatalogLazy = React.lazy(()=> import('./components/SolutionCatalog/SolutionCatalog'));
const SolutionPageLazy = React.lazy(()=>import('./components/SolutionPage/SolutionPage'));
const PostPageLazy = React.lazy(()=>import('./components/PostPage/PostPage'));
const LoginLazy = React.lazy(()=>import('./components/Login/Login'));
const RegisterLazy = React.lazy(()=>import('./components/Register/Register'));

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

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      posts: [],
      post: '',
      solution: '',
      isSignedIn: false,
      route: 'home',
      component: '',
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

  //State changing methods

  resetInput = ()=>{
    this.setState({input: ''});
  }

  onInputChange = (event)=>{
    this.setState({input: event.target.value});
  }

  RouteChange = (route)=>{
    console.log(route);
    this.setState({route: route, input: ''});
  }

  onLoginClick = (event)=>{
    this.setState({route: 'home', isSignedIn: true});
  }

  setUser = (user)=>{
    this.setState({user: user});
  }

  onLogout = ()=>{
    this.setState(initialState);
  }

  onPostClick = (event)=>{
    this.setState({route: 'post', post: posts[event.currentTarget.id-1]});
    window.scrollTo(0, 0);
  }

  onSolutionClick = (event)=>{
    this.setState({route: 'solution', solution: solutions[event.currentTarget.id-1]});
    window.scrollTo(0, 0);
  }

  onFileClick = (ref) =>{
    console.log('Download file ', ref, this.state.user);
  }

  render(){

    const filteredPosts = posts.filter((post)=>{
      console.log(post);
      return  post.summary.toLowerCase().includes(this.state.input.toLowerCase()) || 
              post.title.toLowerCase().includes(this.state.input.toLowerCase()) ||
              post.body.some(el=>el.type === 'text' && el.content.toLowerCase().includes(this.state.input.toLowerCase()));
    });

    const filteredSolutions = solutions.filter((solution)=>{
      return  solution.title.toLocaleLowerCase().includes(this.state.input.toLocaleLowerCase()) || 
              solution.summary.toLocaleLowerCase().includes(this.state.input.toLocaleLowerCase()) ||
              solution.body.toLocaleLowerCase().includes(this.state.input.toLocaleLowerCase())
    });

    const homeRoute = () =>{
      return (
        <div>
          <Home blogName={'NetSuite Pro'} />
        </div>
      );
    }

    const aboutRoute = () =>{
      return (
          <div>
            <About />
          </div>
      );
    }

    const blogRoute = () =>{
      return (
        <div>
          <SearchField onInputChange={this.onInputChange} searchTitle={'Looking for specific keywords?'}/>
          <Suspense fallback={<div>Loading...</div>}>
            <PostListLazy posts={filteredPosts} onPostClick={this.onPostClick} />
          </Suspense>
        </div>
      );
    }

    const loginRoute = () =>{
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <LoginLazy onLoginClick={this.onLoginClick} setUser={this.setUser} registerClick={this.RouteChange} />
        </Suspense>
      );
    }

    const registerRoute = () =>{
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <RegisterLazy onLoginClick={this.onLoginClick} />
        </Suspense>
      );
    }

    const postRoute = () =>{
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <PostPageLazy post={this.state.post} onPostReturn={this.RouteChange} onInputChange={this.onInputChange} resetInput={this.resetInput} />
          </Suspense>
        </div> 
      );
    }

    const catalogRoute = () =>{
      return (
        <div>
          <SearchField onInputChange={this.onInputChange} searchTitle={'Looking for specific keywords?'}/>
          <Suspense fallback={<div>Loading...</div>}>
            <SolutionCatalogLazy
              isSignedIn={this.state.isSignedIn} 
              onSolutionClick={this.onSolutionClick}
              solutions={filteredSolutions}
            />
          </Suspense>
        </div>
      );
    }

    const solutionRoute = () =>{
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <SolutionPageLazy
            solution={this.state.solution}
            onSolutionReturn={this.RouteChange}
            onFileClick={this.onFileClick}
          />
        </Suspense>
      );
    }

    const notFountRoute = () =>{
      return (
        <div>
          Page Not Found
        </div>
      );
    }

    const renderPage = () =>{
      switch(this.state.route){
        case 'home':
          return homeRoute();
        case 'about':
          return aboutRoute();
        case 'blog':
          return blogRoute();
        case 'login':
          return loginRoute();
        case 'register':
          return registerRoute();
        case 'post':
          return postRoute();
        case 'catalog':
          return catalogRoute();
        case 'solution':
          return solutionRoute();
        default:
          return notFountRoute();
      }
    }

    return (
      <div className='tc'>
        <Navbar 
          isSignedIn={this.state.isSignedIn} 
          onButtonClick={this.RouteChange} 
          onLogout={this.onLogout}
          //onBlog={this.onPostReturn}
          //onHome={this.onHomeClick}
          user={this.state.user}
          //onCatalogClick={this.onCatalogClick}
        />
        <Feed 
          isSignedIn={this.state.isSignedIn} 
          registerClick={this.registerClick} 
          onSolutionClick={this.onCatalogClick}
        />
        {
          renderPage()
        }
        <Footer />
      </div>
    );
  }
}

export default App;
