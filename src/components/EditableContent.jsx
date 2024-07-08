import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons'; 

const EditableContent = ({ content, onChange, cssContent, onStyleChange, onImageChange }) => {
  const [showStyles, setShowStyles] = useState(false); 
  const iframeRef = useRef(null);
  const initialLoad = useRef(true);

  useEffect(() => {
    const iframeDocument = iframeRef.current.contentDocument;

    if (initialLoad.current) {
      iframeDocument.open();
      iframeDocument.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>${cssContent}</style>
        </head>
        <body>
          <div contentEditable="true" style="border: 1px solid #ccc; padding: 10px; min-height: 100px;">
            ${content}
          </div>
        </body>
        </html>
      `);
      iframeDocument.close();

      const editableDiv = iframeDocument.body.querySelector('div');
      editableDiv.addEventListener('input', () => {
        onChange(editableDiv.innerHTML);
      });

      initialLoad.current = false;
    } else {
      const editableDiv = iframeDocument.body.querySelector('div');
      if (editableDiv && editableDiv.innerHTML !== content) {
        editableDiv.innerHTML = content;
      }
    }
  }, [content, cssContent, onChange]);

  const applyStyle = (selector, styleProperty, value) => {
    const iframeDocument = iframeRef.current.contentDocument;
    const styleTag = iframeDocument.head.querySelector('style');
    styleTag.innerHTML += `${selector} { ${styleProperty}: ${value}; }`;

    const updatedCssContent = iframeDocument.head.querySelector('style').innerText;
    onStyleChange(updatedCssContent);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const iframeDocument = iframeRef.current.contentDocument;
      const editableDiv = iframeDocument.body.querySelector('div');
      editableDiv.innerHTML = editableDiv.innerHTML.replace(event.target.name, url);
      onImageChange(event.target.name, url);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-full overflow-x-auto">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className={`lg:w-1/4 ${showStyles ? 'block' : 'hidden lg:block'}`}>
          <h3 className="text-lg font-semibold mb-2">Modificar Estilos</h3>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <span>Color de texto:</span>
              <input type="color" onChange={(e) => applyStyle('body, .header, .navbar, .footer', 'color', e.target.value)} className="w-12 h-8 border rounded" />
            </label>
            <label className="flex items-center gap-2">
              <span>Fuente:</span>
              <select onChange={(e) => applyStyle('body, .header, .navbar, .footer', 'font-family', e.target.value)} className="border rounded p-1">
                <option value="">Seleccionar fuente</option>
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Georgia">Georgia</option>
              </select>
            </label>
            <label className="flex items-center gap-2">
              <span>Tamaño de fuente:</span>
              <input type="number" onChange={(e) => applyStyle('body, .header, .navbar, .footer', 'font-size', `${e.target.value}px`)} className="w-16 border rounded p-1" />
            </label>
            <label className="flex items-center gap-2">
              <span>Color de fondo del footer:</span>
              <input type="color" onChange={(e) => applyStyle('.footer', 'background-color', e.target.value)} className="w-12 h-8 border rounded" />
            </label>
            <label className="flex items-center gap-2">
              <span>Color de fondo del header:</span>
              <input type="color" onChange={(e) => applyStyle('.navbar', 'background-color', e.target.value)} className="w-12 h-8 border rounded" />
            </label>
            <label className="flex items-center gap-2">
              <span>Color de fondo del banner:</span>
              <input type="color" onChange={(e) => applyStyle('.header', 'background-color', e.target.value)} className="w-12 h-8 border rounded" />
            </label>
            <label className="flex items-center gap-2">
              <span>Color de los botones:</span>
              <input type="color" onChange={(e) => applyStyle('button, .contact button, .newsletter button', 'background-color', e.target.value)} className="w-12 h-8 border rounded" />
            </label>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Cambiar Imágenes</h3>
            {content.match(/<img [^>]*src="[^"]*"[^>]*>/g)?.map((imgTag, index) => {
              const imgSrc = imgTag.match(/src="([^"]*)"/)[1];
              return (
                <div key={index} className="flex flex-col gap-2 mb-2">
                  <label className="break-all">{imgSrc}</label>
                  <input type="file" name={imgSrc} onChange={handleImageChange} className="border rounded p-1" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:w-3/4 flex-grow">
          <iframe
            ref={iframeRef}
            className="w-full h-full border-none mt-4 lg:mt-0"
            style={{ minHeight: '600px' }}
          />
        </div>
      </div>

      <button 
        className="lg:hidden fixed bottom-4 right-4 p-4 bg-blue-600 text-white rounded-full shadow-md"
        onClick={() => setShowStyles(!showStyles)}
      >
        <FontAwesomeIcon icon={faCog} size="lg" />
      </button>
    </div>
  );
};

export default EditableContent;
