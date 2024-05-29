import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
        <p>DENEDIG © 2024 Todos los derechos reservados.</p>
        <ul className="footer-links">
            <li><a href="#privacy"></a>Politicas de Privacidad</li>
            <li><a href="#calidad"></a>Pegruntas de calidad</li>
            <li><a href="#frecuente"></a>Preguntas Frecuentes</li>
        </ul>
        <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
    </div>
  </footer>

  );
}

export default Footer;