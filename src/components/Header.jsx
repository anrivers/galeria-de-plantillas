import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>GALERÍA DE PLANTILLLAS</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;