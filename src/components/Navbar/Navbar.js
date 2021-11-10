import React from 'react';
import './Navbar.css'

const Navbar = ({ isSignedIn, onLogin, onLogout, onBlog, onHome, user })=>{
    const greeting = user.email ? 'Hello ' + user.email : '';
    return (
        <nav className="dt w-100 border-box pa3 ph5-ns b--light-blue br2 ba">
            <span className="dtc v-mid mid-gray link dim w-25">
                {greeting}
            </span>
            
            <div className="dtc v-mid w-75 tr">
                <span className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns pointer grow" onClick={onHome}>Home</span>
                <span className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns pointer grow" onClick={onBlog}>Blog</span>
                {
                    isSignedIn ? 
                    <span className="link dim dark-gray f6 f5-ns dib pointer grow" onClick={onLogout} >Log out</span> :
                    <span className="link dim dark-gray f6 f5-ns dib pointer grow" onClick={onLogin} >Log in</span>
                }
            </div>
        </nav>

    )
}

export default Navbar;