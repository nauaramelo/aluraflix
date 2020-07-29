import React from 'react'; 
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img class="Logo" src={Logo} alt="Aluraflix logo" />
            </a>
            <Button as="a" href="/" className="ButtonLink" >
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;