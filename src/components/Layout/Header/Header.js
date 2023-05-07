import React from 'react';
import NavbarCustomComponent from '../Navbar/Navbar';
import DarkLogo from '@/components/Logo/DarkLogo';

const Header = (props) => {
    return (
        <>
            <header>
                <NavbarCustomComponent />
            </header>
        </>
    );
};

export default Header;
