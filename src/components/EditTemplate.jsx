import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTemplateById, updateTemplate } from '../services/templateService';

const EditTemplate = () => {
  const { id } = useParams();
  const [template, setTemplate] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    subtheme: '',
    description: '',
    imageUrl: '',
    htmlContent: '',
    cssContent: '',
    jsContent: ''
  });

  useEffect(() => {
    if (id) {
      getTemplateById(id)
        .then(data => {
          setTemplate(data);
          setFormData({
            name: data.name,
            subtheme: data.subtheme,
            description: data.description,
            imageUrl: data.imageUrl,
            htmlContent: data.htmlContent,
            cssContent: data.cssContent,
            jsContent: data.jsContent
          });
        })
        .catch(error => console.error(error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTemplate(id, formData)
      .then(() => {
        console.log('Template actualizado con éxito');
      })
      .catch(error => console.error(error));
  };

  if (!template) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Editar {template.name}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Subtema</label>
          <input
            type="text"
            name="subtheme"
            value={formData.subtheme}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>URL de la Imagen</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>HTML</label>
          <textarea
            name="htmlContent"
            value={template.htmlContent}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>CSS</label>
          <textarea
            name="cssContent"
            value={formData.cssContent}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>JavaScript</label>
          <textarea
            name="jsContent"
            value={formData.jsContent}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default EditTemplate;