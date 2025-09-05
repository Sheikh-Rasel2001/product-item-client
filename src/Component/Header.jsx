import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <nav className='navigate'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Update</NavLink>
            </nav>
        </div>
    );
};

export default Header;