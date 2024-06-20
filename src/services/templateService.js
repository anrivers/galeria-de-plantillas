let templates = [
  {
    id: 1,
    name: 'Plantilla Completa',
    subtheme: 'Negocios',
    imageUrl: '/images/estructura-web.png',
    description: 'Una plantilla completa para negocios',
    htmlContent: `
  <body>
    <header>
        <div class="logo">MiLogo</div>
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    </header>
    
    <div class="banner">
        <h1>Bienvenido a Nuestra Página</h1>
        <p>Descubre más sobre nuestros servicios y productos</p>
    </div>
    
    <main>
        <section class="principal">
            <h2>Sección Principal</h2>
            <p>Esta es la sección principal donde se presenta la información más relevante.</p>
        </section>
        
        <section class="imagenes">
            <h2>Galería de Imágenes</h2>
            <div class="galeria">
                <img src='/images/aboutus1.jpg' alt="Imagen 1">
                <img src='/images/aboutus2.jpg' alt="Imagen 2">
                <img src='/images/aboutus3.jpg' alt="Imagen 3">
            </div>
        </section>
        
        <section class="carrusel">
            <h2>Carrusel de Imágenes</h2>
            <div class="carrusel-container">
                <div class="carrusel-imagen">
                    <img src="imagen1.jpg" alt="Imagen 1">
                </div>
                <div class="carrusel-imagen">
                    <img src="imagen2.jpg" alt="Imagen 2">
                </div>
                <div class="carrusel-imagen">
                    <img src="imagen3.jpg" alt="Imagen 3">
                </div>
            </div>
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </section>
        
        <section class="contacto">
            <h2>Contacto</h2>
            <form>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" required></textarea>
                
                <button type="submit">Enviar</button>
            </form>
        </section>
    </main>
    
    <section class="newsletter">
        <h2>Suscríbete a nuestro Newsletter</h2>
        <form>
            <label for="correo">Email:</label>
            <input type="email" id="correo" name="correo" required>
            <button type="submit">Suscribirse</button>
        </form>
    </section>
    
    <footer>
        <p>&copy; 2024 Mi Página Web. Todos los derechos reservados.</p>
    </footer>
    
    <script src="scripts.js"></script>
</body>
  `,
  cssContent: `
   /* Estilos generales */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f4f4f4;
}

/* Estilos del encabezado */
header {
    background-color: #333;
    color: white;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header .logo {
    font-size: 1.5em;
}

nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
}

nav ul li {
    margin-left: 1em;
}

nav ul li a {
    color: white;
    text-decoration: none;
    padding: 0.5em;
}

nav ul li a:hover {
    background-color: #555;
}

/* Estilos del banner */
.banner {
    background: url('banner.jpg') no-repeat center center/cover;
    color: black;
    text-align: center;
    padding: 5em 1em;
}

.banner h1 {
    margin: 0;
    font-size: 2.5em;
}

.banner p {
    font-size: 1.2em;
}

/* Estilos del contenido principal */
main {
    padding: 1em;
}

main section {
    margin-bottom: 2em;
}

.principal, .imagenes, .carrusel, .contacto {
    background: white;
    padding: 2em;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.galeria {
    display: flex;
    gap: 1em;
}

.galeria img {
    width: calc(33.333% - 1em);
    border-radius: 8px;
}

/* Estilos del carrusel */
.carrusel-container {
    position: relative;
    max-width: 100%;
    overflow: hidden;
    display: flex;
}

.carrusel-imagen {
    min-width: 100%;
    transition: transform 0.5s ease-in-out;
}

.carrusel-imagen img {
    width: 100%;
    border-radius: 8px;
}

button.prev, button.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 1em;
    cursor: pointer;
}

button.prev {
    left: 0;
}

button.next {
    right: 0;
}

/* Estilos del formulario de contacto */
form label {
    display: block;
    margin: 0.5em 0 0.2em;
}

form input, form textarea {
    width: 100%;
    padding: 0.5em;
    margin-bottom: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
}

form button {
    background-color: #333;
    color: white;
    border: none;
    padding: 1em 2em;
    cursor: pointer;
    border-radius: 4px;
}

form button:hover {
    background-color: #555;
}

/* Estilos del newsletter */
.newsletter {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 2em;
    margin: 2em 0;
}

.newsletter form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
}

.newsletter input {
    padding: 0.5em;
    border-radius: 4px;
    border: none;
}

.newsletter button {
    background-color: #555;
    color: white;
    border: none;
    padding: 0.5em 1em;
    cursor: pointer;
    border-radius: 4px;
}

.newsletter button:hover {
    background-color: #777;
}

/* Estilos del pie de página */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1em;
}
  `,
  jsContent: `
   
let slideIndex = 0;

function showSlides(n) {
    let slides = document.querySelectorAll(".carrusel-imagen");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function moveSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});
      `,
    },
    {
      id: 2,
      name: 'Plantilla Minimalista',
      subtheme: 'Portafolio',
      imageUrl:'/images/estructura-web.png',
      description: 'Una plantilla minimalista para portafolios personales',
      htmlContent: `
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <header>
          <h1>Hello, I'm a Designer</h1>
          <p>Welcome to my portfolio</p>
        </header>
        <section class="portfolio">
          <h2>My Work</h2>
          <div class="portfolio-gallery">
            <!-- Galería de portafolio -->
          </div>
        </section>
        <section class="contact">
          <h2>Contact Me</h2>
          <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <label for="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
        <footer>
          <p>&copy; 2023 My Portfolio. All rights reserved.</p>
        </footer>
      `,
      cssContent: `
        nav {
          background-color: #fff;
          color: #333;
        }
        nav ul {
          list-style: none;
          display: flex;
          justify-content: space-around;
        }
        nav a {
          color: #333;
          text-decoration: none;
        }
        header {
          text-align: center;
          padding: 50px;
          background-color: #f9f9f9;
        }
        .portfolio, .contact {
          padding: 20px;
          margin: 20px 0;
        }
        .portfolio-gallery {
          display: flex;
          flex-wrap: wrap;
        }
        .portfolio-gallery div {
          width: 30%;
          margin: 5px;
          background-color: #eaeaea;
          padding: 10px;
        }
        footer {
          text-align: center;
          padding: 10px;
          background-color: #fff;
          color: #333;
        }
      `,
      jsContent: `
        document.addEventListener('DOMContentLoaded', function() {
        const carouselContainer = document.querySelector('.carousel-container');
      });
      `,
    },
    {
      id: 3,
      name: 'Plantilla de Eventos',
      subtheme: 'Conferencias',
      imageUrl:'/images/estructura-web.png',
      description: 'Una plantilla moderna para eventos y conferencias',
      htmlContent: `
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#speakers">Speakers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <header>
          <h1>Join Our Event</h1>
          <p>Don't miss out on our amazing event</p>
        </header>
        <section class="schedule">
          <h2>Event Schedule</h2>
          <div class="schedule-details">
            <!-- Detalles del horario del evento -->
          </div>
        </section>
        <section class="speakers">
          <h2>Our Speakers</h2>
          <div class="speakers-list">
            <!-- Lista de oradores -->
          </div>
        </section>
        <section class="contact">
          <h2>Contact Us</h2>
          <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <label for="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
        <footer>
          <p>&copy; 2023 Event Inc. All rights reserved.</p>
        </footer>
      `,
      cssContent: `
        nav {
          background-color: #333;
          color: #fff;
        }
        nav ul {
          list-style: none;
          display: flex;
          justify-content: space-around;
        }
        nav a {
          color: #fff;
          text-decoration: none;
        }
        header {
          text-align: center;
          padding: 50px;
          background-color: #e9e9e9;
        }
        .schedule, .speakers, .contact {
          padding: 20px;
          margin: 20px 0;
        }
        .speakers-list {
          display: flex;
          flex-wrap: wrap;
        }
        .speakers-list div {
          width: 30%;
          margin: 5px;
          background-color: #f0f0f0;
          padding: 10px;
        }
        footer {
          text-align: center;
          padding: 10px;
          background-color: #333;
          color: #fff;
        }
      `,
      jsContent: `
        document.addEventListener('DOMContentLoaded', function() {
          // Código para inicializar detalles de la conferencia
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
