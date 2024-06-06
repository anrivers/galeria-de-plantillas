import React from 'react';
import Header from '../components/Header';
import FooterComponent from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

export const Contact = () => {
  return (
  <div>
    <Header></Header>
    <div className="contact-container">
      <h2>CONTACTO</h2>
      <p>Complete el formulario a continuación para ponerse en contacto con nosotros.</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div className="contact-info">
        <h3>Información de contacto</h3>
        <div className="contact-info-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x"/>
          <p>Dirección: Calle Leibnitz 270 PB Anzures, CDMX. C.P. 11590</p>
        </div>
        <div className="contact-info-item">
          <FontAwesomeIcon icon={faPhone} size="2x"/>
          <p>Teléfono: +52 1 312 154 3747 </p>
        </div>
        <div className="contact-info-item">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <p>Email: contacto@denedig.online </p>
        </div>
      </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
  );
}
