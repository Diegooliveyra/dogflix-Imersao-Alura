import React from 'react';
import Logo from '../../acess/image/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButttonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className='Logo' src={Logo} alt='DogFlix Logo' />
            </a>
            <Button as='a' className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;