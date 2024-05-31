import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = () => {
    return (
        <footer>
            <div className="container__footer">
                <div className="box__footer">
                    <div className="logo">
                    <h1>GALERÍA DE PLANTILLAS</h1>
                    </div>
                    <div className="terms">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis et quasi aut facere vitae vero. Inventore, minus ab voluptate modi repellat, pariatur tempora quisquam, debitis facilis explicabo voluptatem. A.
                    </div>
                </div>
                <div className="box__footer">
                    <h2>Enlaces</h2>
                    <a href="#">Política de privacidad</a>
                    <a href="#">Política de calidad</a>
                    <a href="#">Preguntas Frecuentes</a>
                </div>

                <div className="box__footer">
                    <h2>Contacto</h2>
                    <a href="#">Dirección</a>
                    <a href="#">Número</a>
                    <a href="#">Correo</a>            
                </div>

                <div className="box__footer">
                    <h2>Redes Sociales</h2>
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

            <div className="box__copyright">
                <hr />
                <p>Todos los derechos reservados © 2024 <b>DENEDIG SAS DE C.V.</b></p>
            </div>
        </footer>
    );
}

export default FooterComponent;