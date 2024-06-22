import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto p-5 bg-white rounded-lg">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-5">CONTACTO</h2>
        <p className="text-lg">Complete el formulario a continuación para ponerse en contacto con nosotros.</p>
      </div>
      <form className="flex flex-col gap-4 mt-5">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-bold text-lg">Nombre:</label>
          <input type="text" id="name" name="name" className="border-2 border-gray-300 rounded-md p-2 bg-gray-100" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-bold text-lg">Correo electrónico:</label>
          <input type="email" id="email" name="email" className="border-2 border-gray-300 rounded-md p-2 bg-gray-100" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="font-bold text-lg">Mensaje:</label>
          <textarea id="message" name="message" className="border-2 border-gray-300 rounded-md p-2 bg-gray-100 resize-y min-h-20" required></textarea>
        </div>
        <button type="submit" className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-500 transition-colors">Enviar</button>
      </form>
      <div className="flex flex-col items-center mt-8">
        <h3 className="text-2xl mb-4">Información de contacto</h3>
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="text-blue-700 mr-4" />
          <p className="text-lg">Dirección: Calle Leibnitz 270 PB Anzures, CDMX. C.P. 11590</p>
        </div>
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faPhone} size="2x" className="text-blue-700 mr-4" />
          <p className="text-lg">Teléfono: +52 1 312 154 3747</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-blue-700 mr-4" />
          <p className="text-lg">Email: contacto@denedig.online</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;