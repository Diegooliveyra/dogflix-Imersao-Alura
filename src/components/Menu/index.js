import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../acess/image/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButttonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className='Logo' src={Logo} alt='DogFlix Logo' />
            </Link>
            <Button as={Link}className="ButtonLink" to="/casdastro/Video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;