import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="bg-gray-200 text-black py-5 px-5 lg:px-10 flex justify-between items-center flex-wrap">
      <div className="logo text-lg">
        <h1>GALERÍA DE PLANTILLAS</h1>
      </div>
      <nav className={`nav-links ${menuActive ? 'block' : 'hidden'} mt-4 lg:mt-0 lg:flex lg:items-center w-full lg:w-auto lg:justify-center`}>
        <ul className="flex flex-col items-center lg:flex-row gap-4 lg:gap-8 lg:text-lg">
          <li><Link to="/" className="text-black hover:text-white hover:bg-blue-700 px-3 py-1 rounded transition duration-300 block">Inicio</Link></li>
          <li><Link to="/Templates" className="text-black hover:text-white hover:bg-blue-700 px-3 py-1 rounded transition duration-300 block">Plantillas</Link></li>
          <li><Link to="/Aboutus" className="text-black hover:text-white hover:bg-blue-700 px-3 py-1 rounded transition duration-300 block">Sobre Nosotros</Link></li>
          <li><Link to="/Contact" className="text-black hover:text-white hover:bg-blue-700 px-3 py-1 rounded transition duration-300 block">Contacto</Link></li>
        </ul>
      </nav>
      <button className="menu-toggle lg:hidden flex justify-center items-center" onClick={toggleMenu}>
        <div className="block">
          &#9776;
        </div>
      </button>
    </header>
  );
}

export default Header;