import React, { useEffect, useRef } from 'react';

const EditableContent = ({ content, onChange, cssContent }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframeDocument = iframeRef.current.contentDocument;
    iframeDocument.body.innerHTML = `
      <style>${cssContent}</style>
      <div contenteditable="true" style="border: 1px solid #ccc; padding: 10px; min-height: 100px;">
        ${content}
      </div>
    `;

    const editableDiv = iframeDocument.querySelector('div');
    editableDiv.addEventListener('input', () => {
      onChange(editableDiv.innerHTML);
    });
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