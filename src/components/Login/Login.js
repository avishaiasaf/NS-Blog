import React, { Component } from 'react';

class Login extends Component{ //({ onLoginClick })=>{
    constructor(){
        super();  
        this.state ={
            email: '',
            password: ''
        }
    }

    onNameChange = (event)=>{
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event)=>{
        this.setState({password: event.target.value});
    }

    //https://pure-beyond-10290.herokuapp.com
    
    onSubmit = ()=>{
        fetch('https://pure-beyond-10290.herokuapp.com/signin', {
            'method': 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then(user =>{
            console.log(user, 'login', user.length);
            if(user.email){
                this.props.onLoginClick();
                this.props.setUser(user);
            }
        })
        .catch(err => {console.log('oops something is wrong')})
    }

    render(){
        const { registerClick } = this.props;
        return (
            <main class="pa4 black-80">
                <div class="measure center">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend class="f4 fw6 ph0 mh0">Sign In</legend>
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input onChange={this.onNameChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div class="mv3">
                        <label class="db fw6 lh-copy f6" for="password">Password</label>
                        <input onChange={this.onPasswordChange} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                    <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                    </fieldset>
                    <div class="">
                    <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={this.onSubmit} />
                    </div>
                    <div class="lh-copy mt3">
                    <a href="#0" class="f6 link dim black db" onClick={registerClick} >Sign up</a>
                    {/* <a href="#0" class="f6 link dim black db">Forgot your password?</a> */}
                    </div>
                </div>
            </main>
        );
    }  
}

export default Login;