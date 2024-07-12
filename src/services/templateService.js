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
        <img src="/images/aboutus1.jpg" alt="Proyecto 1">
        <h3>Proyecto 1</h3>
        <p>Descripción del proyecto 1...</p>
      </div>
      <div class="portfolio-item">
        <img src="/images/aboutus2.jpg" alt="Proyecto 2">
        <h3>Proyecto 2</h3>
        <p>Descripción del proyecto 2...</p>
      </div>
      <div class="portfolio-item">
        <img src="/images/aboutus3.jpg" alt="Proyecto 3">
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

.navbar {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; /* Permite que los elementos se ajusten a múltiples líneas */
}

.navbar .logo {
    font-size: 1.5rem;
}

.navbar .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 0;
}

.navbar .nav-links a {
    color: #fff;
    text-decoration: none;
    padding: 10px 15px;
    transition: background-color 0.3s ease; /* Efecto de transición opcional */
}

.navbar .nav-links a:hover {
    background-color: #555; /* Color de fondo al pasar el mouse */
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
  color: #333;
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

@media (max-width: 768px) {
    .navbar .menu-toggle {
        display: block; /* Mostrar el icono de menú */
    }

    .navbar .nav-links {
        display: none; /* Ocultar los enlaces de navegación */
        flex-direction: column; /* Alinear en columna para dispositivos móviles */
        position: absolute;
        top: 60px; /* Ajusta según la altura de tu barra de navegación */
        left: 0;
        background-color: #333;
        width: 100%;
        padding: 10px 0;
        z-index: 1000;
    }

    .navbar .nav-links a {
        padding: 10px 20px;
    }

    .navbar .nav-links.active {
        display: flex; /* Mostrar enlaces cuando el menú está activo */
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
      description: 'Una plantilla para agencia digital.',
      htmlContent: `
<body>
    <nav class="navbar">
        <div class="heading">Mi agencia</div>
        <span class="sideMenuButton" 
            onclick="openNavbar()">
            &#9776
        </span>

        <div >
            <ul>
                <li><a href="#Home">Inicio</a></li>
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#">Sesión</a></li>
            </ul>
        </div>
    </nav>

    <div class="header">
    <!-- Content -->
    <div class="line" id="Home">
        <div class="side1">
            <h1>AGENCIA   DIGITAL</h1>
            <button>
                <a href=
"https://www.geeksforgeeks.org/">
                    Ver más
                </a>
            </button>
        </div>
        <div class="side2">
            <img src="/images/aboutus1.jpg" alt="Proyecto 1" width="500">
        </div>
    </div>
    </div>

    <section class="about" id="My Projects">
        <div class="content">
            <div class="title">
                <span>Ventajas</span>
            </div>
            <div class="boxes">
                <div class="box">
                    <div class="topic">
                        <a href="" target="_blank">
                            VENTAJA 1
                        </a>
                    </div>
                    <p>
                        Creemos que lo que realmente le aporta valor a nuestros socios comerciales, es asumir y compartir la responsabilidad de sus objetivos de negocio, permitiendo el crecimiento de éste.
                    </p>
                </div>
                <div class="box">

                    <div class="topic">
                        <a href="" target="_blank">
                            VENTAJA 2
                        </a>
                    </div>
                    <p>
                        Nuestra metodología nos ayuda a expandir la percepción de marca de nuestros clientes, llevando el reconocimiento al siguiente nivel. Creamos estrategias medibles y replicables que permiten generar resultados en el corto, mediano y largo plazo.
                    </p>
                </div>

                <div class="box">
                    <div class="topic">
                        <a href="" target="_blank">
                            VENTAJA 3
                        </a>
                    </div>
                    <p>
                       Como Agencia de Marketing Digital contamos con especialistas en diferentes áreas, un gran equipo multidisciplinario de expertos en digital que refleja multiculturalidad y manejo de diferentes idiomas
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="contact" id="contact">
        <div class="content">
            <div class="title"><span>Entrar</span></div>
            <div class="contactMenu">
                <div class="input1">
                    <div class="label1">Tu nombre</div>
                    <div class="input2">
                        <input type="text" 
                            placeholder="Ingresa tu nombre aquí">
                    </div>
                    <div class="label1">
                        <label>Tu correo</label>
                    </div>
                    <div class="input2">
                        <input type="text" required
                            placeholder="Ingresa tu correo aquí">
                    </div>
                    <div class="label1">
                        <label>Tu contraseña</label>
                    </div>
                    <div class="input2">
                        <input type="text" 
                            placeholder="Ingresa tu contraseña aquí">
                    </div>
                    <div class="button">
                        <button>Ingresar</button>
                    </div>
                </div>
                <div class="input3">
                    <div class="rightside1">
                        <div class="title1">
                            <span>
                            Contacto
                            </span>
                        </div>
                        <div class="content1">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis et quasi aut facere vitae vero. 
                        </div>
                        <div class="title1">
                            <span>Mas información</span>
                        </div>
                        <div class="content1">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis et quasi aut facere vitae vero. Inventore, minus ab voluptate modi repellat, pariatur tempora quisquam, debitis facilis explicabo voluptatem. A. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis et quasi aut facere vitae vero. Inventore, minus ab voluptate modi repellat, pariatur tempora quisquam, debitis facilis explicabo voluptatem. A.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Footer section -->
    <footer>
        <div class="footer">
            <span>
                Todos los derechos reservados
                <a href="https://www.geeksforgeeks.org/" 
                    target="_blank">
                    2024
                </a>
            </span>
        </div>
    </footer>
</body>
      `,
      cssContent: `
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: white;
    color: black;
    font-family: "Fira Sans", sans-serif;
    background-color: white;
}

nav {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 20px 5%;
    background-color: #8cc099;
}

nav .heading {
    font-size: 30px;
    font-weight: 700;
    color: white;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    padding: 8px 15px;
    border-radius: 10px;
    transition: 0.2s ease-in;
}

nav ul li a {
    color: black;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    color: white;
}

nav ul li:hover {
    background-color: green;
}

nav ul li a:hover {
    color: white;
}

nav .sideMenuButton {
    font-size: 30px;
    font-weight: bolder;
    cursor: pointer;
    display: none;
}

/* responsive navbar css */
@media screen and (max-width: 600px) {
    nav .sideMenuButton {
        display: flex;
    }

    nav .navbar {
        display: none;
    }

    .sideNavigationBar {
        display: block !important;
    }
}

.sideNavigationBar {
    height: 100%;
    position: fixed;
    top: 0;
    right: 0%;
    background-color: green;
    overflow-x: hidden;
    transition: 0.3s ease-in;
    padding-top: 60px;
    display: none;
}

.sideNavigationBar a {
    padding: 8px 8px 8px 40px;
    display: block;
    font-size: 25px;
    font-weight: 500;
    color: #d1d1d1;
    transition: 0.3s;
    text-decoration: none;
}

.sideNavigationBar a button {
    padding: 10px 20px;
    border-radius: 10px;
    color: green;
    font-size: 16px;
    border-style: none;
    font-weight: 700;
}

.sideNavigationBar a:hover {
    color: white;
}

.sideNavigationBar .closeButton {
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 20px;
    margin-left: 50px;
}

.line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2% 5%;
}

.line .side1 {
    padding-right: 50px;
}

.side1 h1 {
    font-size: 60px;
    margin-bottom: 10px;
    color: green;
}

.side1 button {
    width: 200px;
    padding: 12px 20px;
    border-radius: 20px;
    border-style: none;
    color: black;
    font-size: 17px;
    font-weight: 600;
}

a {
    text-decoration: none;
    color: black;
}

/* Header content responsive */
@media screen and (max-width: 980px) {
    .side2 img {
        width: 350px;
    }

    .side1 h1 {
        font-size: 40px;
    }

    .side1 p {
        font-size: 17px;
    }

    .line {
        margin-top: 80px;
    }
}

@media screen and (max-width: 600px) {
    .side1 h1 {
        font-size: 35px;
    }

    .line {
        flex-direction: column;
    }

    .line .side1 {
        padding: 30px;
    }
}

/* section */

section .topic a {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 10px;
}

.about .boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.about .boxes .box {
    margin: 10px 20px;
    max-width: calc(100% / 3 - 50px);
    text-align: center;
    border-radius: 12px;
    padding: 30px 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    cursor: default;
}

/* Contact Page  */

.contact {
    padding: 20px;
}

.contact .content {
    margin: 0 auto;
    padding: 30px 0;
}

.content .title {
    width: 80%;
    text-align: center;
    font-weight: bolder;
    font-size: 40px;
}

.title {
    margin-bottom: 30px;
    margin-left: 80px;
}

.contactMenu {
    display: flex;
    justify-content: space-evenly;
}

.input2 {
    margin-top: 10;
}

.label1 {
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 8px;
    font-weight: bolder;
}

.contactMenu .input1 input {
    border-radius: 13px;
    padding: 6px;
}

.input2 input {
    border-color: rgb(252, 244, 244);
    width: 400px;
}

.button {
    margin-top: 12px;
    margin-left: 5px;
}

.button button {
    width: 162px;
    height: 35px;
    border-radius: 12px;
    border-color: transparent;
}

.button button:hover {
    background-color: #8cc099;
}

button {
    width: 162px;
    height: 35px;
    border-radius: 12px;
    border-color: transparent;
}

button:hover {
    background-color: #8cc099;
}

.rightside1 {
    display: flex;
    flex-direction: column;
    margin-left: 300px;
}

.title1 {
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 5px;
    font-weight: bolder;
}

.content1 {
    width: 450px;
    margin-top: 2px;
    color: grey;
}

/* Footer */
footer {
    background: var(--primary-color);
    padding: 15px 0;
    text-align: center;
    font-family: "Poppins", sans-serif;
}

footer .footer span {
    font-size: 17px;
    font-weight: 400;
    color: var(--white-color);
}

footer .footer span a {
    font-weight: 500;
    color: var(--white-color);
}

footer .footer span a:hover {
    text-decoration: underline;
}

@media screen and (max-width: 1060px) {
    .contactMenu {
        flex-direction: column;
        align-items: center;
    }

    .rightside1 {
        display: flex;
        flex-direction: column;
        margin-left: 0px;
    }

    .content1 {
        width: 100%;
        margin-top: 2px;
        color: grey;
    }

    .side2 img {
        width: 95%;
        height: 90%;
    }
}

@media screen and (max-width: 600px) {
    .side2 img {
        width: 100%;
    }

    section .topic a {
        font-size: 20px;
    }

    section .topic p {
        font-size: 5px;
    }

    .about .boxes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .about .boxes .box {
        max-width: 70%;
    }
}

      `,
      jsContent: `
function openNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "50%";
}
function closeNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "0%";
}

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
