import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

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
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Aboutus">Sobre Nosotros</Link></li>
          <li><Link to="/Contact">Contacto</Link></li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
    </header>
  );
}

export default Header;