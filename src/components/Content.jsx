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
    </main>
  );
}

export default Content;