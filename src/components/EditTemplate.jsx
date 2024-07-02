import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getTemplateById } from '../services/templateService';
import { useDrag, useDrop } from 'react-dnd';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import EditableContent from './EditableContent';

const ItemTypes = {
  ELEMENT: 'element',
};

const DraggableElement = ({ id, index, children, moveElement }) => {
  const [, ref] = useDrag({
    type: ItemTypes.ELEMENT,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.ELEMENT,
    hover(item) {
      if (item.index !== index) {
        moveElement(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div ref={node => ref(drop(node))} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      {children}
    </div>
  );
};

const EditTemplate = () => {
  const { id } = useParams();
  const [template, setTemplate] = useState(null);
  const [elements, setElements] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTemplate = useCallback(async () => {
    if (id) {
      setLoading(true);
      try {
        const data = await getTemplateById(id);
        setTemplate(data);
        const sections = data.htmlContent.split('<section>').map((section, index) => ({
          id: index,
          content: `<section>${section}</section>`,
          style: '',
        }));
        setElements(sections);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }, [id]);

  useEffect(() => {
    fetchTemplate();
  }, [fetchTemplate]);

  const moveElement = (fromIndex, toIndex) => {
    const updatedElements = [...elements];
    const [movedElement] = updatedElements.splice(fromIndex, 1);
    updatedElements.splice(toIndex, 0, movedElement);
    setElements(updatedElements);
  };

  const handleContentChange = (index, newContent) => {
    const updatedElements = [...elements];
    updatedElements[index].content = newContent;
    setElements(updatedElements);
  };

  const handleStyleChange = (index, newStyle) => {
    const updatedElements = [...elements];
    updatedElements[index].style = newStyle;
    setElements(updatedElements);
  };

  const handleImageChange = (index, oldSrc, newSrc) => {
    const updatedElements = [...elements];
    updatedElements[index].content = updatedElements[index].content.replace(oldSrc, newSrc);
    setElements(updatedElements);
  };

  const handleDownload = async () => {
    const htmlContent = elements.map(element => element.content).join('');
    const cssContent = template.cssContent;
    const jsContent = template.jsContent;

    const updatedHtmlContent = htmlContent.replace(/src="([^"]+)"/g, (match, p1) => {
      return `src="images/${p1.split('/').pop()}"`;
    });

    const updatedCssContent = `
      ${cssContent}
      ${elements.map(element => element.style).join('\n')}
    `;

    const zip = new JSZip();

    const htmlFileContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${template.name}</title>
        <style>${updatedCssContent}</style>
      </head>
      <body>
        ${updatedHtmlContent}
        <script>${jsContent}</script>
      </body>
      </html>
    `;
    zip.file(`${template.name}.html`, htmlFileContent);

    const imagesFolder = zip.folder('images');

    const imageUrls = [];
    const imageRegex = /src="([^"]+)"/g;
    let match;
    while ((match = imageRegex.exec(htmlContent)) !== null) {
      imageUrls.push(match[1]);
    }

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

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!template) {
    return <div>Error cargando plantilla</div>;
  }

  return (
    <div className="text-center">
      <h1 className="text-center font-bold mb-5 text-3xl">Edita {template.name}</h1>
      <div className="template-editor-container">
        {elements.map((element, index) => (
          <DraggableElement key={element.id} id={element.id} index={index} moveElement={moveElement}>
            <EditableContent
              content={element.content}
              cssContent={template.cssContent}
              onChange={newContent => handleContentChange(index, newContent)}
              onStyleChange={newStyle => handleStyleChange(index, newStyle)}
              onImageChange={(oldSrc, newSrc) => handleImageChange(index, oldSrc, newSrc)}
            />
          </DraggableElement>
        ))}
      </div>
      <button onClick={handleDownload} className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-500 transition-colors">
        Descargar cambios
      </button>
    </div>
  );
};

export default EditTemplate;
