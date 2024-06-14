import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardsDetail from '../components/CardsDetail';

function CardsDetailPage() {
  const { id } = useParams(); 

  return (
    <div> 
      <Header />
      <CardsDetail id={id} /> 
      <Footer />
    </div>
  );
}

export default CardsDetailPage;