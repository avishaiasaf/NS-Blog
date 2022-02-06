import React from 'react';
import { Link } from "react-router-dom";
// import './Navbar.css'

const Navbar = ({ isSignedIn, onButtonClick, onLogout, user })=>{
    const greeting = user.email ? 'Hello ' + user.email.substr(0, user.email.indexOf('@')) : '';
    // const solutionCatalog = ()=>{
    //     if(isSignedIn){
    //         return <span className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns pointer grow" onClick={onCatalogClick}>Solution Catalog</span>;
    //     }
    // }  
    return (
        <nav className="dt w-100 border-box pa3 ph5-ns b--light-blue br2 ba">
            <span className="dtc v-mid mid-gray link dim w-25">
                {greeting}
            </span>
            
            <div className="dtc v-mid w-75 tr">
                {/*<span className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns pointer grow" onClick={()=>{onButtonClick('home')}}>Home</span>*/}
                <Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns pointer grow" to="/home" >Home</Link>
                {
                    // Inactivating as part of Go Live overcomplexity
                    /*<span className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns pointer grow" onClick={()=>{onButtonClick('catalog')}}>Solution Center</span>*/
                }
                <Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns pointer grow" to="/about">About</Link>
                <Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns pointer grow" to="/blog">Blog</Link>
                {/*<span className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns pointer grow" onClick={()=>{onButtonClick('blog')}}>Blog</span>*/}
                {
                    // Inactivating as part of Go Live overcomplexity
                    // isSignedIn ?
                    // <span className="link dim dark-gray f6 f5-ns dib pointer grow" onClick={onLogout} >Log out</span> :
                    // <span className="link dim dark-gray f6 f5-ns dib pointer grow" onClick={()=>{onButtonClick('login')}} >Log in</span>
                }
            </div>
        </nav>

    )
}

export default Navbar;