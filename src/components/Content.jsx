import React from 'react';
import './Content.css'; 
import Card from './Cards';

const Content = () => {
  return (
    <main className="content">
        <section id="home">
          <h2>PLANTILLAS WEB</h2>
          <p>Elige el diseño para crear tu sitio. Puedes cambiar el color, texto y todo a tu gusto.
          </p>
        </section>
      <div className="card-container">
        <Card
          imageUrl="images/estructura-web.png"
          title="Nombre de la plantilla"
          description="CLorem ipsum dolor sit amet, consectetur adipisicing elit, sed dousmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
        />
        <Card
          imageUrl="images/estructura-web.png"
          title="Nombre de la plantilla"
          description="CLorem ipsum dolor sit amet, consectetur adipisicing elit, sed dousmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
        />
        <Card
          imageUrl="images/estructura-web.png"
          title="Nombre de la plantilla"
          description="CLorem ipsum dolor sit amet, consectetur adipisicing elit, sed dousmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
        />
        <Card
          imageUrl="images/estructura-web.png"
          title="Nombre de la plantilla"
          description="CLorem ipsum dolor sit amet, consectetur adipisicing elit, sed dousmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
        />
        <Card
          imageUrl="images/estructura-web.png"
          title="Nombre de la plantilla"
          description="CLorem ipsum dolor sit amet, consectetur adipisicing elit, sed dousmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
        />
        <Card
          imageUrl="images/estructura-web.png"
          title="Nombre de la plantilla"
          description="CLorem ipsum dolor sit amet, consectetur adipisicing elit, sed dousmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
        />
      </div>
        <section id="contact">
          <h2>Ejemplo de contenido</h2>
          <p>CLorem ipsum dolor sit amet, consectetur adipisicing elit, sed dousmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor..</p>
        </section>

      </main>
  );
}

export default Content;