import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';
import { getTemplateById, updateTemplate } from '../services/templateService';

const ItemTypes = {
  ELEMENT: 'element',
};

const DraggableElement = ({ id, children, moveElement }) => {
  const [, ref] = useDrag({
    type: ItemTypes.ELEMENT,
    item: { id },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.ELEMENT,
    hover(item) {
      if (item.id !== id) {
        moveElement(item.id, id);
        item.id = id;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
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
      getTemplateById(id)
        .then(data => {
          setTemplate(data);
          setElements(data.htmlContent.split('<section>').map((section, index) => ({ id: index + 1, content: section })));
        })
        .catch(error => console.error(error));
    }
  }, [id]);

  const moveElement = (draggedId, hoveredId) => {
    const draggedIndex = elements.findIndex(el => el.id === draggedId);
    const hoveredIndex = elements.findIndex(el => el.id === hoveredId);
    const updatedElements = [...elements];
    const [draggedElement] = updatedElements.splice(draggedIndex, 1);
    updatedElements.splice(hoveredIndex, 0, draggedElement);
    setElements(updatedElements);
  };

  const handleSave = () => {
    const updatedHtmlContent = elements.map(el => el.content).join('<section>');
    const updatedTemplate = { ...template, htmlContent: updatedHtmlContent };
    updateTemplate(id, updatedTemplate)
      .then(() => {
        console.log('Template updated successfully');
      })
      .catch(error => console.error(error));
  };

  if (!template) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit {template.name}</h1>
      <div>
        {elements.map((element) => (
          <DraggableElement key={element.id} id={element.id} moveElement={moveElement}>
            <div dangerouslySetInnerHTML={{ __html: element.content }} />
          </DraggableElement>
        ))}
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditTemplate;