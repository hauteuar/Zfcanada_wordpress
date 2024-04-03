// NavigationBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; // Your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
    // States for each dropdown menu

    const [isDropdownOpen, setDropdownOpen] = useState({ home: false, pages: false, visa: false, services: false, blog: false, contact: false });

    // Function to handle dropdown visibility
    const handleDropdown = (menu) => {
        setDropdownOpen(prevState => ({
            ...prevState,
            [menu]: !prevState[menu]
        }));
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/"> <img src="images/logo.jpeg" alt="Logo" /> </Link>

                
            </div>
            <ul className="navbar-nav" style={{ marginLeft: "10%" }}>
                <li className="nav-item" onClick={() => handleDropdown('home')}>
                    <Link to="/" className="nav-link">Home <FontAwesomeIcon icon={faCaretDown} /></Link>
                    {isDropdownOpen.home && (
                        <div className="dropdown-menu">
                            {/* Dropdown Items */}
                        </div>
                    )}
                </li>
                {/* Repeat for each nav item */}
                <li className="nav-item" onClick={() => handleDropdown('services')}>
                    <Link to="/services" className="nav-link">Services <FontAwesomeIcon icon={faCaretDown} /></Link>
                    {isDropdownOpen.services && (
                        <div className="dropdown-menu">
                            <Link to="/visa-services">Visa Services</Link>
                            <Link to="/immigration-consultancy">Immigration Consultancy</Link>
                            {/* More dropdown items */}
                        </div>
                    )}
                </li>
                {/* ... other nav items */}
            </ul>
            <div className="navbar-search">
                {/* Search icon and functionality */}
            </div>
        </nav>
    );
};

export default NavigationBar;
