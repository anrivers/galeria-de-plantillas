import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>GALERÍA DE PLANTILLAS</h1>
      </div>
      <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
    </header>
  );
}

export default Header;