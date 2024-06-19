import React, { useEffect, useState } from 'react';
import { getTemplateById } from '../services/templateService'; 
import './CardsDetail.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CardsDetail = ({ id }) => {
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    getTemplateById(id).then(data => setTemplate(data)).catch(error => console.error(error));
  }, [id]);

  if (!template) {
    return <div>Cargando...</div>;
  }

  const handleDownload = () => {
    if (!template) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${template.name}</title>
        <style>${template.cssContent}</style>
      </head>
      <body>
        ${template.htmlContent}
        <script>${template.jsContent}</script>
      </body>
      </html>
    `;

    const element = document.createElement('a');
    const file = new Blob([htmlContent], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = `${template.name}.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

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
            <button className="btn" onClick={handleDownload}>Descargar</button>
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