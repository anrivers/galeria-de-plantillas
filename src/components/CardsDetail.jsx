import React from 'react';
import './CardsDetail.css';

const CardsDetail = () => {
  return (
    <div className="template-detail-container">
      <div className="template-detail-content">
        <h1>NOMBRE DE TU PLANTILLA</h1>
        <h2>Subtema</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
        </p>
        <div className="buttons">
          <button className="btn">Descargar</button>
          <button className="btn">Ver</button>
          <button className="btn">Editar</button>
        </div>
      </div>
      <div className="template-detail-image">
        <img src="/images/estructura-web.png" alt="Plantilla" />
      </div>
    </div>
  );
};

export default CardsDetail;
