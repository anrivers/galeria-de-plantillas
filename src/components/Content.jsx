import React, { useEffect, useState } from 'react';
import Card from './Cards';
import { getTemplates } from '../services/templateService';

const Content = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    getTemplates().then(data => setTemplates(data));
  }, []);

  return (
    <main className="content p-5">
      <section className="mb-8">
        <h2 className="text-center text-gray-900 text-3xl font-bold mb-4">PLANTILLAS WEB</h2>
        <p className="text-center text-gray-800 text-lg">Elige el diseño para crear tu sitio. Puedes cambiar el color, texto y todo a tu gusto.</p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
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

      <section className="mb-8">
        <h2 className="text-center text-gray-900 text-3xl font-bold mb-4">Ejemplo de contenido</h2>
        <p className="text-center text-gray-800 text-lg">CLorem ipsum dolor sit amet, consectetur adipisicing elit, sed dousmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor..</p>
      </section>
    </main>
  );
}

export default Content;