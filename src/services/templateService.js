let templates = [
    {
      id: 1,
      name: 'Plantilla Completa',
      subtheme: 'Negocios',
      imageUrl:'/images/estructura-web.png',
      description: 'Una plantilla completa para negocios',
      htmlContent: `
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <header>
          <h1>Welcome to Our Business</h1>
          <p>Your success is our priority</p>
        </header>
        <section class="banner">
          <img src="banner.jpg" alt="Business Banner">
        </section>
        <section class="main">
          <h2>Main Services</h2>
          <p>We provide a wide range of business solutions to help you succeed.</p>
        </section>
        <section class="images">
          <h2>Our Work</h2>
          <div class="image-gallery">
            <img src="work1.jpg" alt="Work 1">
            <img src="work2.jpg" alt="Work 2">
            <img src="work3.jpg" alt="Work 3">
          </div>
        </section>
        <section class="carousel">
          <h2>Testimonials</h2>
          <div class="carousel-container">
            <!-- Carrusel de testimonios -->
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
          <p>&copy; 2023 Business Inc. All rights reserved.</p>
        </footer>
        <section class="newsletter">
          <h2>Subscribe to our Newsletter</h2>
          <form>
            <input type="email" placeholder="Enter your email">
            <button type="submit">Subscribe</button>
          </form>
        </section>
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
          background-color: #f4f4f4;
        }
        .banner img {
          width: 100%;
          height: auto;
        }
        .main, .images, .carousel, .contact, .newsletter {
          padding: 20px;
          margin: 20px 0;
        }
        .image-gallery img {
          width: 30%;
          margin: 5px;
        }
        .carousel-container {
          /* Estilos para el contenedor del carrusel */
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
          // Código para inicializar el carrusel de imágenes
          const carouselContainer = document.querySelector('.carousel-container');
          // Lógica para el carrusel
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
          // Código para inicializar la galería de portafolio
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
