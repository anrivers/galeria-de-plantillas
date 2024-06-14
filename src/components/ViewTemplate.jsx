import React, { useEffect, useState } from 'react';
import { getTemplateById } from '../services/templateService';
import { useParams } from 'react-router-dom';

const ViewTemplate = () => {
  const { id } = useParams();
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    if (id) {
      getTemplateById(id).then(data => setTemplate(data)).catch(error => console.error(error));
    }
  }, [id]);

  if (!template) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <style>{template.cssContent}</style>
      <div dangerouslySetInnerHTML={{ __html: template.htmlContent }}></div>
      <script>{template.jsContent}</script>
    </div>
  );
};

export default ViewTemplate;