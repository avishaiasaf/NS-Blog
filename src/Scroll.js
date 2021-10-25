import React from 'react';

const Scroll = ({ children }) =>{
    return (
            <div style={{overflowY: 'auto', height: '700px', padding: '5% 15%'}}>
            {children}
            </div>
    );
}

export default Scroll;