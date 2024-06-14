import React, { useEffect, useState } from 'react';
import { getTemplateById } from '../services/templateService'; 
import './CardsDetail.css';
import { Link } from 'react-router-dom';

const CardsDetail = ({ id }) => {
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    getTemplateById(id).then(data => setTemplate(data)).catch(error => console.error(error));
  }, [id]);

  if (!template) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="template-detail-container">
      <div className="template-detail-content">
        <h1>{template.name}</h1>
        <h2>{template.subtheme}</h2>
        <p>{template.description}</p>
        <div className="buttons">
          <Link to={`/DownloadTemplate/${id}`}>
            <button className="btn">Descargar</button>
          </Link>
          <Link to={`/ViewTemplate/${id}`}>
            <button className="btn">Ver</button>
          </Link>
          <Link to={`/EditTemplate/${id}`}>
            <button className="btn">Editar</button>
          </Link>
        </div>
      </div>
      <div className="template-detail-image">
      <img src={template.imageUrl} />
      </div>
    </div>
  );
};

export default CardsDetail;