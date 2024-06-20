import React from "react";
import './Aboutus.css';

export const AboutUs = () => {
    return (
        <div>
            <div className="about-container">
      <h2>SOBRE NOSOTROS</h2>
      <p>Somos una empresa dedicada a ofrecer las mejores plantillas web para tu sitio. Nuestro equipo está compuesto por diseñadores y desarrolladores con amplia experiencia en el campo.</p>
      <div className="about-content">
        <div className="about-section">
          <img src="images/aboutus1.jpg" alt="Nuestra Misión" className="about-image"/>
          <div className="about-text">
            <h3>Nuestra Misión</h3>
            <p>Impulsar el éxito empresarial proporcionando soluciones digitales personalizadas, optimizando operaciones y mejorando la experiencia del usuario.</p>
          </div>
        </div>
        <div className="about-section reverse">
          <img src="images/aboutus2.jpg" alt="Nuestro Equipo" className="about-image"/>
          <div className="about-text">
            <h3>Nuestro Equipo</h3>
            <p>Contamos con un equipo multidisciplinario de profesionales apasionados por el diseño web y la tecnología.</p>
          </div>
        </div>
        <div className="about-section">
          <img src="images/aboutus3.jpg" alt="Nuestros Valores" className="about-image"/>
          <div className="about-text">
            <h3>Nuestros Valores</h3>
            <ul>
              <li>Innovación</li>
              <li>Responsabilidad</li>
              <li>Transparencia</li>
              <li>Flexibilidad</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
}