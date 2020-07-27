import React from 'react';
import Logo from '../../assets/Logo.png'
import './Menu.css'
import ButtonLink from '../ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Myflix" />
      </a>

      <ButtonLink href="/" className="ButtonLink">
        Novo vídeo
      </ButtonLink>

    </nav>
  )
}

export default Menu;