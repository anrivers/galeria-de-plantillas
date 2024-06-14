import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EditTemplate from '../components/EditTemplate';

function EditPage() {
  const { id } = useParams(); 

  return (
    <div> 
      <Header />
      <EditTemplate id={id} /> 
      <Footer />
    </div>
  );
}

export default EditPage;