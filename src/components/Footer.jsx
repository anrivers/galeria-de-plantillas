import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import backgroundFooter from '../assets/background-footer.svg'; 

const FooterComponent = () => {
  return (
    <footer className="py-16 bg-white" style={{ backgroundImage: `url(${backgroundFooter})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex flex-wrap justify-between pb-10 lg:pb-0 lg:pt-10">
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white">GALERÍA DE PLANTILLAS</h1>
            </div>
            <div className="text-gray-300 text-sm mt-4 text-center max-w-xs mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis et quasi aut facere vitae vero. Inventore, minus ab voluptate modi repellat, pariatur tempora quisquam, debitis facilis explicabo voluptatem. A.
            </div>
          </div>
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <div className="text-center">
              <h2 className="text-lg font-bold mb-4 text-white">Enlaces</h2>
            </div>
            <div className="text-center">
              <Link to="/FAQ" className="block text-gray-300 hover:text-white mb-2">Política de privacidad</Link>
              <Link to="/FAQ" className="block text-gray-300 hover:text-white mb-2">Política de calidad</Link>
              <Link to="/FAQ" className="block text-gray-300 hover:text-white mb-2">Preguntas Frecuentes</Link>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <div className="text-center">
              <h2 className="text-lg font-bold mb-4 text-white">Contacto</h2>
            </div>
            <div className="text-center">
              <Link to="/Contact" className="block text-gray-300 hover:text-white mb-2">Dirección</Link>
              <Link to="/Contact" className="block text-gray-300 hover:text-white mb-2">Número</Link>
              <Link to="/Contact" className="block text-gray-300 hover:text-white mb-2">Correo</Link>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <div className="text-center">
              <h2 className="text-lg font-bold mb-4 text-white">Redes Sociales</h2>
            </div>
            <div className="flex justify-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mb-3 mr-3">
                <FontAwesomeIcon icon={faFacebook} size="3x" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mb-3 mr-3">
                <FontAwesomeIcon icon={faTwitter} size="3x" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mb-3">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-300 mt-10">
          <hr className="border-gray-700 mb-4" />
          <p>Todos los derechos reservados © 2024 <b>DENEDIG SAS DE C.V.</b></p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;