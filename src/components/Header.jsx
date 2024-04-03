// In your component that includes both TopBar and NavigationBar
import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import NavigationBar from './NavigationBar';


const Header = () => {
    const [hideTopbar, setHideTopbar] = useState(false);
    const [stickyNav, setStickyNav] = useState(false);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = currentScrollPos < 50; // Change 50 to the height of your TopBar

        setHideTopbar(!visible);
        setStickyNav(currentScrollPos > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <TopBar hide={hideTopbar} />
            <NavigationBar className={stickyNav ? 'sticky' : ''} />
            
        </header>
    );
};

export default Header;
