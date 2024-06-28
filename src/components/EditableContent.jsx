import React, { useEffect, useRef } from 'react';

const EditableContent = ({ content, onChange, cssContent, onStyleChange, onImageChange }) => {
  const iframeRef = useRef(null);
  const initialLoad = useRef(true);

  useEffect(() => {
    const iframeDocument = iframeRef.current.contentDocument;

    if (initialLoad.current) {
      iframeDocument.open();
      iframeDocument.write(`
        <!DOCTYPE html>
        <html lang="en">
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

  const applyStyle = (styleProperty, value) => {
    const iframeDocument = iframeRef.current.contentDocument;
    const styleTag = iframeDocument.head.querySelector('style');
    styleTag.innerHTML += `body { ${styleProperty}: ${value}; }`;

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
    <div className="p-4 bg-white rounded shadow-md">
      <iframe
        ref={iframeRef}
        className="w-full h-[600px] border-none mt-4"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Modificar Estilos</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <span>Color de texto:</span>
            <input type="color" onChange={(e) => applyStyle('color', e.target.value)} className="w-12 h-8 border rounded" />
          </label>
          <label className="flex items-center gap-2">
            <span>Fuente:</span>
            <select onChange={(e) => applyStyle('font-family', e.target.value)} className="border rounded p-1">
              <option value="">Seleccionar fuente</option>
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Georgia">Georgia</option>
            </select>
          </label>
          <label className="flex items-center gap-2">
            <span>Tamaño de fuente:</span>
            <input type="number" onChange={(e) => applyStyle('font-size', `${e.target.value}px`)} className="w-16 border rounded p-1" />
          </label>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Cambiar Imágenes</h3>
        {content.match(/<img [^>]*src="[^"]*"[^>]*>/g)?.map((imgTag, index) => {
          const imgSrc = imgTag.match(/src="([^"]*)"/)[1];
          return (
            <div key={index} className="flex items-center gap-2 mb-2">
              <label className="flex-1">{imgSrc}</label>
              <input type="file" name={imgSrc} onChange={handleImageChange} className="border rounded p-1" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditableContent;