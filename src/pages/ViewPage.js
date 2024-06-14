import React from 'react';
import { useParams } from 'react-router-dom';
import ViewTemplate from '../components/ViewTemplate';

function ViewPage() {
  const { id } = useParams(); 

  return (
    <div>
      <ViewTemplate id={id} /> 
    </div>
  );
}

export default ViewPage;