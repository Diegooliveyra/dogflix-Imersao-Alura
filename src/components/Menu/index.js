import React from 'react';
import Logo from '../../acess/image/Logo.png';
import './Menu.css';

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
                <img className='Logo' src={Logo} alt = 'DogFlix Logo'/>
            </a>
            <a className="ButtonLink" href="/">
                Novo Video
            </a>
        </nav>
    );
}

export default Menu;