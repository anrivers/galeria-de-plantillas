import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTemplateById } from '../services/templateService';
import { useDrag, useDrop } from 'react-dnd';
import { saveAs } from 'file-saver';
import 'draft-js/dist/Draft.css';
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

  useEffect(() => {
    if (id) {
      getTemplateById(id).then(data => {
        setTemplate(data);
        const sections = data.htmlContent.split('<section>').map((section, index) => ({
          id: index,
          content: section,
        }));
        setElements(sections);
      }).catch(error => console.error(error));
    }
  }, [id]);

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

  const handleDownload = () => {
    const htmlContent = elements.map(element => `<section>${element.content}</section>`).join('');
    const cssContent = template.cssContent;
    const jsContent = template.jsContent;

    const blob = new Blob([`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${template.name}</title>
        <style>${cssContent}</style>
      </head>
      <body>
        ${htmlContent}
        <script>${jsContent}</script>
      </body>
      </html>
    `], { type: 'text/html;charset=utf-8' });

    saveAs(blob, `${template.name}.html`);
  };

  if (!template) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edita {template.name}</h1>
      <div className="template-editor-container">
        {elements.map((element, index) => (
          <DraggableElement key={element.id} id={element.id} index={index} moveElement={moveElement}>
            <EditableContent
              content={element.content}
              cssContent={template.cssContent}
              onChange={(newContent) => handleContentChange(index, newContent)}
            />
          </DraggableElement>
        ))}
      </div>
      <button onClick={handleDownload}>Descarga cambios</button>
    </div>
  );
};

export default EditTemplate;