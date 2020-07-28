import React from 'react';
import Logo from '../../assets/imagem/Logo.png';
import './menu.css';
import Button from '../Button'


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt=""/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;