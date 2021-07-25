import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {

    return (
        <header className="header">
            <h1>Welcome To My Portfolio</h1>
            <h3><NavLink to="/about">Blake Johnson</NavLink></h3>
        </header>
    )
}

export default Header;