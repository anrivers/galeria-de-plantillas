import React, { useEffect, useState } from 'react';
import { getTemplateById } from '../services/templateService';
import { useParams } from 'react-router-dom';

const DownloadTemplate = () => {
  const { id } = useParams();
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    if (id) {
      getTemplateById(id).then(data => setTemplate(data)).catch(error => console.error(error));
    }
  }, [id]);

  const handleDownload = () => {
    if (!template) return;

    const element = document.createElement('a');
    const file = new Blob([template.htmlContent, template.cssContent, template.jsContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${template.name}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  if (!template) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Descargar {template.name}</h1>
      <button onClick={handleDownload}>Descargar Plantilla</button>
    </div>
  );
};

export default DownloadTemplate;