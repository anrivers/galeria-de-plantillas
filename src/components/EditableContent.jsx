import React, { useEffect, useRef } from 'react';

const EditableContent = ({ content, onChange, cssContent }) => {
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

  return (
    <iframe
      ref={iframeRef}
      style={{
        width: '100%',
        height: '600px',
        border: 'none',
        marginTop: '10px',
      }}
    />
  );
};

export default EditableContent;