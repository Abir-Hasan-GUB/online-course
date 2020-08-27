import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
           <img src="" alt="img"/>
            <h1>Welcome to Learn and Fun academi</h1>
            <div className="nav">
               <li><a href="/Course">Course</a></li>
               <li><a href="/Order">Order</a></li>
               <li><a href="/Card">Card</a></li>
                </div>
        </div>

    );
};

export default Header;