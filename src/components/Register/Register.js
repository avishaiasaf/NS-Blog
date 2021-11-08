import React, { Component } from 'react';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            name:'',
            email:'',
            password:''
        }
    }

    onNameChange = (event)=>{
        this.setState({name: event.target.value});
    }

    onEmailChange = (event)=>{
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event)=>{
        this.setState({password: event.target.value});
    }

    onSubmit = ()=>{
        fetch('https://pure-beyond-10290.herokuapp.com/register', {
            'method': 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then(user =>{
            console.log(user, 'login', user.length);
            if(user[0].id){
                this.props.onLoginClick();
            }
        })
    }

    render(){
        return (
            <div>
                <main class="pa4 black-80">
                    <div class="measure center">
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend class="f4 fw6 ph0 mh0">Register</legend>
                        <div class="mt3">
                            <label class="db fw6 lh-copy f6" for="email-address">Name</label>
                            <input onChange={this.onNameChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                        </div>
                        <div class="mt3">
                            <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input onChange={this.onEmailChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div class="mv3">
                            <label class="db fw6 lh-copy f6" for="password">Password</label>
                            <input onChange={this.onPasswordChange} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                        </fieldset>
                        <div class="">
                        <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={this.onSubmit} />
                        </div>
                    </div>
                </main>
            </div>
        );
    }  
}

export default Register;