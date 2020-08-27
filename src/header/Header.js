import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="title">
                <h1>Learn With Abir Hasan</h1> 
            </div>
            {/* Menu Ber  */}
            <div className="navs"> 
                <li><a href="/Course">Course</a></li>
                <li><a href="/Order">Order</a></li>
                <li><a href="/Cart">Cart</a></li>
            </div>
        </div>
    );
};

export default Header;