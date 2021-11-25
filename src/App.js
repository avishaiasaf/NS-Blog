import './App.css';
import Navbar from './components/Navbar/Navbar';
import Feed from './components/Feed/Feed';
import SearchField from './components/SearchField/SearchField';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
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

  resetInput = ()=>{
    this.setState({input: ''});
  }

  onInputChange = (event)=>{
    //console.log(event.target.value);
    this.setState({input: event.target.value});
  }

  RouteChange = (route)=>{
    console.log(route);
    this.setState({route: route});
  }

  onLoginClick = (event)=>{
    //console.log(event.target);
    this.setState({route: 'home', isSignedIn: true});
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
                   {/* <PostList posts={filteredPosts} onPostClick={this.onPostClick} />  */}
                <Suspense fallback={<div>Loading...</div>}>
                  <PostListLazy posts={filteredPosts} onPostClick={this.onPostClick} />
                </Suspense>
                </div>
              
          );
        case 'login':
          return (
            <Suspense fallback={<div>Loading...</div>}>
              <LoginLazy onLoginClick={this.onLoginClick} setUser={this.setUser} registerClick={this.RouteChange} />
            </Suspense>
          // <Login onLoginClick={this.onLoginClick} setUser={this.setUser} registerClick={this.registerClick} />
          );
        case 'register':
          return (
            <Suspense fallback={<div>Loading...</div>}>
              <RegisterLazy onLoginClick={this.onLoginClick} />
            </Suspense>
          );
          // <Register onLoginClick={this.onLoginClick} />
        case 'post':
          return (
            <div>
              {/* <PostPage post={this.state.post} onPostReturn={this.onPostReturn} /> */}
              <Suspense fallback={<div>Loading...</div>}>
                <PostPageLazy post={this.state.post} onPostReturn={this.RouteChange} onInputChange={this.onInputChange} resetInput={this.resetInput} />
              </Suspense>
            </div> 
          );
        case 'catalog':
          return (
            <div>
              <SearchField onInputChange={this.onInputChange} searchTitle={'Looking for specific content?'}/>
              <Suspense fallback={<div>Loading...</div>}>
                <SolutionCatalogLazy
                  isSignedIn={this.state.isSignedIn} 
                  onSolutionClick={this.onSolutionClick}
                  solutions={filteredSolutions}
                />
              </Suspense>
              {/* <SolutionCatalog 
                isSignedIn={this.state.isSignedIn} 
                onSolutionClick={this.onSolutionClick}
                solutions={filteredSolutions}
              /> */}
            </div>
          )
        case 'solution':
          return (
            <Suspense fallback={<div>Loading...</div>}>
              <SolutionPageLazy
                solution={this.state.solution}
                onSolutionReturn={this.onSolutionReturn}
                onFileClick={this.onFileClick}
              />
            </Suspense>
            // <SolutionPage
            //   solution={this.state.solution}
            //   onSolutionReturn={this.onSolutionReturn}
            //   onFileClick={this.onFileClick}
            // />
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
          onButtonClick={this.RouteChange} 
          onLogout={this.onLogout}
          //onBlog={this.onPostReturn}
          //onHome={this.onHomeClick}
          user={this.state.user}
          //onCatalogClick={this.onCatalogClick}
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
