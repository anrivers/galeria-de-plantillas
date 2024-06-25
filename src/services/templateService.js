let templates = [
  {
    id: 1,
    name: 'Plantilla de Portafolio',
    subtheme: 'Freelance',
    imageUrl: '/images/estructura-web.png',
    description: 'Una plantilla completa para los desarrolladores suban su contenido.',
    htmlContent: `
<body>
  <!-- Barra de Navegación -->
  <nav class="navbar">
    <div class="logo">Mi Portafolio</div>
    <ul class="nav-links">
      <li><a href="#home">Inicio</a></li>
      <li><a href="#about">Sobre Mí</a></li>
      <li><a href="#portfolio">Portafolio</a></li>
      <li><a href="#contact">Contacto</a></li>
      <li><a href="#newsletter">Newsletter</a></li>
    </ul>
    <div class="menu-toggle">&#9776;</div>
  </nav>

  <!-- Header / Banner -->
  <header id="home" class="header">
    <h1>Bienvenido a Mi Portafolio</h1>
    <p>Descubre mis proyectos y habilidades</p>
  </header>

  <!-- Sección Principal -->
  <section id="about" class="about">
    <h2>Sobre Mí</h2>
    <p>Hola, soy un desarrollador web con experiencia en diversas tecnologías...</p>
  </section>

  <!-- Sección de Imágenes -->
  <section id="portfolio" class="portfolio">
    <h2>Portafolio</h2>
    <div class="portfolio-container">
      <div class="portfolio-item">
        <img src="project1.jpg" alt="Proyecto 1">
        <h3>Proyecto 1</h3>
        <p>Descripción del proyecto 1...</p>
      </div>
      <div class="portfolio-item">
        <img src="project2.jpg" alt="Proyecto 2">
        <h3>Proyecto 2</h3>
        <p>Descripción del proyecto 2...</p>
      </div>
      <div class="portfolio-item">
        <img src="project3.jpg" alt="Proyecto 3">
        <h3>Proyecto 3</h3>
        <p>Descripción del proyecto 3...</p>
      </div>
    </div>
  </section>

  <!-- Carrusel de Imágenes -->
  <section id="carousel" class="carousel">
    <h2>Galería</h2>
    <div class="carousel-container">
      <div class="carousel-slide">
        <img src="slide1.jpg" alt="Slide 1">
      </div>
      <div class="carousel-slide">
        <img src="slide2.jpg" alt="Slide 2">
      </div>
      <div class="carousel-slide">
        <img src="slide3.jpg" alt="Slide 3">
      </div>
    </div>
    <button class="prev">&#10094;</button>
    <button class="next">&#10095;</button>
  </section>

  <!-- Sección de Contacto -->
  <section id="contact" class="contact">
    <h2>Contacto</h2>
    <form>
      <input type="text" placeholder="Nombre" required>
      <input type="email" placeholder="Email" required>
      <textarea placeholder="Mensaje" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </section>

  <!-- Newsletter -->
  <section id="newsletter" class="newsletter">
    <h2>Suscríbete a nuestro Newsletter</h2>
    <form>
      <input type="email" placeholder="Email" required>
      <button type="submit">Suscribirse</button>
    </form>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <p>&copy; 2024 Mi Portafolio. Todos los derechos reservados.</p>
  </footer>
</body>
  `,
  cssContent: `
  /* Estilos Generales */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Barra de Navegación */
.navbar {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.navbar .logo {
  font-size: 1.5rem;
}

.navbar .nav-links ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.navbar .nav-links a {
  color: #fff;
  text-decoration: none;
}

.navbar .menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Header / Banner */
.header {
  background: url('portfolio-header.jpg') no-repeat center center/cover;
  color: #00000000;
  text-align: center;
  padding: 100px 20px;
}

/* Sección Principal */
.about, .portfolio, .contact, .newsletter {
  padding: 60px 20px;
  text-align: center;
}

/* Sección de Imágenes */
.portfolio-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.portfolio-item {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.portfolio-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* Carrusel de Imágenes */
.carousel {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.carousel-container {
  display: flex;
  overflow: hidden;
}

.carousel-slide {
  min-width: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel img {
  width: 100%;
  height: auto;
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

/* Contacto */
.contact form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact input, .contact textarea, .contact button {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.contact button {
  background-color: #333;
  color: #fff;
  cursor: pointer;
}

/* Newsletter */
.newsletter form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.newsletter input, .newsletter button {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.newsletter button {
  background-color: #333;
  color: #fff;
  cursor: pointer;
}

/* Footer */
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
  }

  .navbar .nav-links.active {
    display: flex;
  }

  .navbar .menu-toggle {
    display: block;
  }

  .portfolio-container {
    flex-direction: column;
    align-items: center;
  }

  .carousel-slide {
    min-width: 100%;
  }
}
  `,
  jsContent: `
   
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const slides = document.querySelectorAll('.carousel-slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let currentIndex = 0;

  const showSlide = (index) => {
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }
    const offset = -currentIndex * 100;
    slides.forEach(slide => {
      slide.style.transform = \`translateX(\${offset}%)\`;
    });
  };

  prev.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });

  next.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  showSlide(currentIndex);
});
      `,
    },
    {
      id: 2,
      name: 'Plantilla de Restaurante',
      subtheme: 'Comida',
      imageUrl:'/images/estructura-web.png',
      description: 'Una plantilla para un negocio de comida.',
      htmlContent: `
<body>
  <!-- Barra de Navegación -->
  <nav class="navbar">
    <div class="logo">Nombre del Restaurante</div>
    <ul class="nav-links">
      <li><a href="#home">Inicio</a></li>
      <li><a href="#menu">Menú</a></li>
      <li><a href="#about">Sobre Nosotros</a></li>
      <li><a href="#gallery">Galería</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
    <div class="menu-toggle">&#9776;</div>
  </nav>

  <!-- Header / Banner -->
  <header id="home" class="header">
    <h1>Bienvenido al Restaurante</h1>
    <p>Descubre nuestros deliciosos platillos</p>
  </header>

  <!-- Sección de Menú -->
  <section id="menu" class="menu">
    <h2>Nuestro Menú</h2>
    <div class="menu-items">
      <div class="menu-item">
        <h3>Platillo 1</h3>
        <p>Descripción del platillo 1...</p>
        <span class="price">$10.99</span>
      </div>
      <div class="menu-item">
        <h3>Platillo 2</h3>
        <p>Descripción del platillo 2...</p>
        <span class="price">$12.99</span>
      </div>
      <div class="menu-item">
        <h3>Platillo 3</h3>
        <p>Descripción del platillo 3...</p>
        <span class="price">$8.99</span>
      </div>
    </div>
  </section>

  <!-- Sección "Sobre Nosotros" -->
  <section id="about" class="about">
    <h2>Sobre Nosotros</h2>
    <p>Somos un restaurante comprometido con la calidad y el servicio...</p>
  </section>

  <!-- Galería de Imágenes -->
  <section id="gallery" class="gallery">
    <h2>Galería</h2>
    <div class="image-gallery">
      <img src="food1.jpg" alt="Comida 1">
      <img src="food2.jpg" alt="Comida 2">
      <img src="food3.jpg" alt="Comida 3">
    </div>
  </section>

  <!-- Sección de Contacto -->
  <section id="contact" class="contact">
    <h2>Contacto</h2>
    <form>
      <input type="text" placeholder="Nombre" required>
      <input type="email" placeholder="Email" required>
      <textarea placeholder="Mensaje" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <p>&copy; 2024 Restaurante Nombre. Todos los derechos reservados.</p>
  </footer>
</body>
      `,
      cssContent: `
       /* Estilos Generales */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Barra de Navegación */
.navbar {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.navbar .logo {
  font-size: 1.5rem;
}

.navbar .nav-links ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.navbar .nav-links a {
  color: #fff;
  text-decoration: none;
}

.navbar .menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Header / Banner */
.header {
  background: url('restaurant-header.jpg') no-repeat center center/cover;
  color: #fff;
  text-align: center;
  padding: 100px 20px;
}

/* Sección de Menú */
.menu {
  padding: 60px 20px;
  text-align: center;
}

.menu-items {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.menu-item {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: left;
  padding: 10px;
}

.menu-item h3 {
  margin: 10px 0;
}

.menu-item p {
  margin-bottom: 10px;
}

.menu-item .price {
  display: block;
  font-weight: bold;
  color: #333;
}

/* Galería de Imágenes */
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
}

.image-gallery img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Contacto */
.contact form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact input, .contact textarea, .contact button {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.contact button {
  background-color: #333;
  color: #fff;
  cursor: pointer;
}

/* Footer */
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
  }

  .navbar .nav-links.active {
    display: flex;
  }

  .navbar .menu-toggle {
    display: block;
  }

  .menu-items {
    flex-direction: column;
    align-items: center;
  }

  .image-gallery {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
      `,
      jsContent: `
      document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
      `,
    },
    {
      id: 3,
      name: 'Plantilla de Agencia Digital',
      subtheme: 'Agencia',
      imageUrl:'/images/estructura-web.png',
      description: 'Una plantilla moderna para agencia digital.',
      htmlContent: `
<body>
  <!-- Barra de Navegación -->
  <nav class="navbar">
    <div class="logo">Agencia Digital</div>
    <ul class="nav-links">
      <li><a href="#home">Inicio</a></li>
      <li><a href="#services">Servicios</a></li>
      <li><a href="#about">Sobre Nosotros</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
    <div class="menu-toggle">&#9776;</div>
  </nav>

  <!-- Header / Banner -->
  <header id="home" class="header">
    <h1>Bienvenido a Nuestra Agencia</h1>
    <p>Ofrecemos soluciones digitales para tu negocio</p>
  </header>

  <!-- Servicios -->
  <section id="services" class="services">
    <h2>Nuestros Servicios</h2>
    <div class="service-container">
      <div class="service">
        <img src="service1.jpg" alt="Servicio 1">
        <h3>Servicio 1</h3>
        <p>Descripción del servicio 1.</p>
      </div>
      <div class="service">
        <img src="service2.jpg" alt="Servicio 2">
        <h3>Servicio 2</h3>
        <p>Descripción del servicio 2.</p>
      </div>
      <div class="service">
        <img src="service3.jpg" alt="Servicio 3">
        <h3>Servicio 3</h3>
        <p>Descripción del servicio 3.</p>
      </div>
    </div>
  </section>

  <!-- Sobre Nosotros -->
  <section id="about" class="about">
    <h2>Sobre Nosotros</h2>
    <p>Texto sobre la historia de la agencia y su misión.</p>
  </section>

  <!-- Contacto -->
  <section id="contact" class="contact">
    <h2>Contacto</h2>
    <form>
      <input type="text" placeholder="Nombre" required>
      <input type="email" placeholder="Email" required>
      <textarea placeholder="Mensaje" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <p>&copy; 2024 Agencia Digital. Todos los derechos reservados.</p>
  </footer>
</body>
      `,
      cssContent: `
        /* Estilos Generales */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Barra de Navegación */
.navbar {
  background-color: #34495e;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.navbar .logo {
  font-size: 1.5rem;
}

.navbar .nav-links ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.navbar .nav-links a {
  color: #fff;
  text-decoration: none;
}

.navbar .menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Header / Banner */
.header {
  background: url('agency-header.jpg') no-repeat center center/cover;
  color: #fff;
  text-align: center;
  padding: 100px 20px;
}

/* Servicios */
.services {
  padding: 60px 20px;
  text-align: center;
}

.service-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.service {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.service img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* Sobre Nosotros, Contacto */
.about, .contact {
  padding: 60px 20px;
  text-align: center;
}

/* Contacto */
.contact form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact input, .contact textarea, .contact button {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.contact button {
  background-color: #34495e;
  color: #fff;
  cursor: pointer;
}

/* Footer */
.footer {
  background-color: #34495e;
  color: #fff;
  text-align: center;
  padding: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
  }

  .navbar .nav-links.active {
    display: flex;
  }

  .navbar .menu-toggle {
    display: block;
  }

  .service-container {
    flex-direction: column;
    align-items: center;
  }
}
      `,
      jsContent: `
        document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
      `,
    },
  ];

  export const getTemplates = () => {
    return Promise.resolve(templates);
  };
  
  export const getTemplateById = (id) => {
    const template = templates.find(t => t.id === parseInt(id));
    return Promise.resolve(template);
  };
  
  export const createTemplate = (template) => {
    template.id = templates.length + 1;
    templates.push(template);
    return Promise.resolve(template);
  };
  
  export const updateTemplate = (id, updatedTemplate) => {
    templates = templates.map(t => t.id === parseInt(id) ? updatedTemplate : t);
    return Promise.resolve(updatedTemplate);
  };
  
  export const deleteTemplate = (id) => {
    templates = templates.filter(t => t.id !== parseInt(id));
    return Promise.resolve();
  };
