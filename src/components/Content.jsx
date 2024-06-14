import React,  { useEffect, useState } from 'react';
import './Content.css'; 
import Card from './Cards';
import { getTemplates } from '../services/templateService';

const Content = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    getTemplates().then(data => setTemplates(data));
  }, []);

  return (
    <main className="content">
        <section id="home">
          <h2>PLANTILLAS WEB</h2>
          <p>Elige el diseño para crear tu sitio. Puedes cambiar el color, texto y todo a tu gusto.
          </p>
        </section>
      <div className="card-container">
      {templates.map(template => (
          <Card
            key={template.id}
            imageUrl={template.imageUrl}
            title={template.name}
            description={template.description}
            templateId={template.id} 
          />
        ))}
      </div>
        <section id="contact">
          <h2>Ejemplo de contenido</h2>
          <p>CLorem ipsum dolor sit amet, consectetur adipisicing elit, sed dousmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor..</p>
        </section>

      </main>
  );
}

export default Content;