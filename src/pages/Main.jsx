import Header from '../components/Header';
import Footer from '../components/Footer';
import { Banner } from '../components/Banner';
import { SectionOne } from '../components/SectionOne';
import { SectionTwo } from '../components/SectionTwo';
import { SectionThree } from '../components/SectionThree';
import React from 'react';


function Main() {
  return (
<div> 
    <Header></Header>
    <Banner></Banner>
    <SectionOne></SectionOne>
    <SectionTwo></SectionTwo>
    <SectionThree></SectionThree>
    <Footer></Footer>
</div>
  );
}

export default Main;