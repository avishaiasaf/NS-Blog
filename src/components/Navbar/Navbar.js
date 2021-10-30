import React from 'react';
import './Navbar.css'

const Navbar = ()=>{
    return (
        <nav className="dt w-100 border-box pa3 ph5-ns b--light-blue br2 ba">
            <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
                <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
            </a>
            <div className="dtc v-mid w-75 tr">
                <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="About">Services</a>
                <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">Blog</a>
                <a className="link dim dark-gray f6 f5-ns dib" href="#" title="Contact">Log in</a>
            </div>
        </nav>

    )
}

export default Navbar;