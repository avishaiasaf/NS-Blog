import React, { Component } from 'react';
import Post from '../PostCard/PostCard';
import SearchField from '../SearchField/SearchField';
import { Link } from "react-router-dom";
import utils from "../Utils/Utils";
// import {posts} from "../posts";

class PostList extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            posts: [],
            post: '',
        }
    }

    onInputChange = (event)=>{
        this.setState({input: event.target.value});
    }

    onPostClick = (event)=>{
        console.log('Post', this.props.posts[event.currentTarget.id-1])
        this.setState({route: 'post', post: this.props.posts[event.currentTarget.id-1]});
        window.scrollTo(0, 0);
    }
    render() {
        // const posts = this.props.posts;
        // console.log(this.props);

        const filteredPosts = this.props.posts.filter((post)=>{
            // console.log(post);
            return  post.summary.toLowerCase().includes(this.state.input.toLowerCase()) ||
                post.title.toLowerCase().includes(this.state.input.toLowerCase()) ||
                post.body.some(el=>el.type === 'text' && el.content.toLowerCase().includes(this.state.input.toLowerCase()));
        });

        return (
            <div className='w-80 center'>
                <SearchField onInputChange={this.onInputChange} searchTitle={'Looking for specific keywords?'}/>
                <section className="mw8 w-80 center">
                    <br /><h2 className="black-50">Recently Posted</h2><br />
                    {
                        filteredPosts.map((post, i)=>{
                            return (
                                <Link to={{pathname: `/blog/${utils.processRoute(filteredPosts[i].title)}`}} className="black-50 tc" >
                                    <Post
                                        title={filteredPosts[i].title}
                                        summary={filteredPosts[i].summary}
                                        body={filteredPosts[i].body}
                                        author={filteredPosts[i].author}
                                        id={filteredPosts[i].id}
                                        onPostClick={this.onPostClick}
                                        img={filteredPosts[i].img}
                                        date={filteredPosts[i].date}
                                        key={filteredPosts[i].id}
                                    />
                                </Link>
                            );
                        })
                    }
                </section>
            </div>
        );
    }
}

export default PostList;