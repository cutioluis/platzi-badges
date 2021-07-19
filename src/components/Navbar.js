import React from 'react';
import '../styles/Navbar.css'
import Logo from '../assets/static/logo.png'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <img src={Logo} alt="platzi badges" />
            </ul>
            <ul className="nav-platzi">
                <li>Inicio</li>
                <li>
                  <button>Crear Badge</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;