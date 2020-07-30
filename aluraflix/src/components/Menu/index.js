import React from 'react';
import Logo from '../../assets/Logo.png'
import './Menu.css'
// import ButtonLink from './components/ButtonLink';
import Button from '../Button'


function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Myflix" />
      </a>

      <Button as='a' href="/" className="ButtonLink">
        Novo vídeo
      </Button>

    </nav>
  )
}

export default Menu;