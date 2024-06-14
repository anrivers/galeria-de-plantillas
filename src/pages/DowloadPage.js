import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DownloadTemplate from '../components/DowloadTemplate';

function DowloadPage() {
  const { id } = useParams(); 

  return (
    <div> 
      <Header />
      <DownloadTemplate id={id} /> 
      <Footer />
    </div>
  );
}

export default DowloadPage;