import React, { useEffect, useState } from 'react';
import { getTemplateById } from '../services/templateService';
import { Link } from 'react-router-dom';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const CardsDetail = ({ id }) => {
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    getTemplateById(id).then(data => setTemplate(data)).catch(error => console.error(error));
  }, [id]);

  const handleDownload = async () => {
    if (!template) return;

    const zip = new JSZip();

    const imageUrls = [];
    const imageRegex = /src="([^"]+)"/g;
    let match;
    while ((match = imageRegex.exec(template.htmlContent)) !== null) {
      imageUrls.push(match[1]);
    }

    const updatedHtmlContent = template.htmlContent.replace(/src="([^"]+)"/g, (match, p1) => {
      return `src="images/${p1.split('/').pop()}"`;
    });

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
        ${updatedHtmlContent}
        <script>${template.jsContent}</script>
      </body>
      </html>
    `;
    zip.file(`${template.name}.html`, htmlContent);

    const imagesFolder = zip.folder('images');
    
    for (const imageUrl of imageUrls) {
      try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${imageUrl}`);
        }
        const blob = await response.blob();
        const imageName = imageUrl.split('/').pop();
        imagesFolder.file(imageName, blob);
      } catch (error) {
        console.error(`Error fetching image ${imageUrl}:`, error);
      }
    }

    zip.generateAsync({ type: 'blob' }).then(content => {
      saveAs(content, `${template.name}.zip`);
    });
  };

  if (!template) {
    return <div className="text-center">Cargando...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-5 bg-white rounded-lg flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 p-5 text-center lg:text-left">
        <h1 className="text-5xl font-bold">{template.name}</h1>
        <h2 className="text-4xl mt-2">{template.subtheme}</h2>
        <p className="text-2xl mt-4">{template.description}</p>
        <div className="mt-5 flex flex-col lg:flex-row lg:justify-start gap-3 items-center">
          <button onClick={handleDownload} className=" w-32 inline-block rounded-md border border-blue-700 bg-blue-700 px-6 py-2.5  text-sm font-medium text-white hover:bg-transparent hover:text-blue-700 focus:outline-none focus:ring active:text-blue-700">Descargar</button>
          <Link to={`/ViewTemplate/${id}`}>
            <button className=" w-32 inline-block rounded-md border border-blue-700 bg-blue-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-transparent hover:text-blue-700 focus:outline-none focus:ring active:text-blue-700">Ver</button>
          </Link>
          <Link to={`/EditTemplate/${id}`}>
            <button className="w-32 inline-block rounded-md border border-blue-700 bg-blue-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-transparent hover:text-blue-700 focus:outline-none focus:ring active:text-blue-700">Editar</button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-2/3 p-5">
        <img src={template.imageUrl} alt={template.name} className="rounded-lg w-full border border-gray-400 h-full object-cover" />
      </div>
    </div>
  );
};

export default CardsDetail;