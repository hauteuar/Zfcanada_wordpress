import React, { useState } from 'react';
//import { ReactComponent as Logo } from './logo.svg'; // Your logo file
//import { ReactComponent as MenuIcon } from './menu-icon.svg'; // Your menu icon
import './Navbar.css'; // Your CSS file

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    
                </div>
                <div className="nav-links">
                    <a href="/home">Home <div className="arrow-down"></div></a>
                   
                </div>
                <div className="search-container">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="menu-icon" onClick={handleMenuClick}>
                    
                </div>
            </div>
            {isMenuOpen && (
                <div className="side-menu">
                    
                </div>
            )}
        </nav>
    );
};

export default Navbar;
