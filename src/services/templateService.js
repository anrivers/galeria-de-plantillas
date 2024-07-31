let templates = [
  {
    id: 1,
    name: 'Plantilla de Portafolio',
    subtheme: 'Desarrolladores',
    imageUrl: '/images/template1/template.png',
    description: 'Una plantilla para los desarrolladores suban su contenido.',
    htmlContent: `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio Website</title>
    <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <script
      src="https://kit.fontawesome.com/7a4b62b0a4.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <header class="header">
      <nav class="container">
        <div class="logo">Portfolio</div>
        <ul>
          <a href="#hero">
            <li>Inicio</li>
          </a>
          <a href="#project">
            <li>Proyectos</li>
          </a>
          <a href="#contact">
            <li>Contacto</li>
          </a>
        </ul>
      </nav>
    </header>
    <main>
      <section id="hero">
        <div class="container">
          <div class="hero_image animate__animated animate__bounceInLeft">
            <img src="../images/template1/hero.png" alt="hero image" />
          </div>
          <div class="hero_content">
            <h1>
              <span class="hi_text">Hola</span> , soy
              <span class="name_text">John Doe</span>
            </h1>
            <h2>Frontend Developer</h2>
          </div>
        </div>
      </section>
      <section id="project">
        <h2>PROYECTOS</h2>
        <div class="container">
          <div class="project_container">
            <div class="grid_item">
              <div class="card">
                <img src="../images/template1/project1.png" alt="Project 1" />
                <a href="#">
                  <div class="card_content">
                    <h3>Sitio web </h3>
                  </div>
                </a>
              </div>
            </div>
            <div class="grid_item">
              <div class="card">
                <img src="../images/template1/Project2.png" alt="Project 2" />
                <a href="#">
                  <div class="card_content">
                    <h3>Aplicación de trabajo</h3>
                  </div>
                </a>
              </div>
            </div>
            <div class="grid_item">
              <div class="card">
                <img src="../images/template1/project3.png" alt="Project 1" />
                <a href="#">
                  <div class="card_content">
                    <h3>Sitio web</h3>
                  </div>
                </a>
              </div>
            </div>
            <div class="grid_item">
              <div class="card">
                <img src="../images/template1/project4.png" alt="Project 4" />
                <a href="#">
                  <div class="card_content">
                    <h3>Landing Page</h3>
                  </div>
                </a>
              </div>
            </div>
            <div class="grid_item">
              <div class="card">
                <img src="../images/template1/project5.png" alt="Project 5" />
                <a href="#">
                  <div class="card_content">
                    <h3>Página Restaurante</h3>
                  </div>
                </a>
              </div>
            </div>
            <div class="grid_item">
              <div class="card">
                <img src="../images/template1/project6.png" alt="Project 6" />
                <a href="#">
                  <div class="card_content">
                    <h3>Página musica</h3>
                  </div>
                </a>
              </div>
            </div>
            <div class="grid_item">
              <div class="card">
                <img src="../images/template1/project7.png" alt="Project 7" />
                <a href="#">
                  <div class="card_content">
                    <h3>Youtube Clone</h3>
                  </div>
                </a>
              </div>
            </div>
            <div class="grid_item">
              <div class="card">
                <img src="../images/template1/project8.png" alt="Project 8" />
                <a href="#">
                  <div class="card_content">
                    <h3>Documentación</h3>
                  </div>
                </a>
              </div>
            </div>
            <div class="grid_item">
              <div class="card">
                <img src="../images/template1/project9.png" alt="Project 9" />
                <a href="#">
                  <div class="card_content">
                    <h3>Sitio web Blog</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div class="container">
          <h2>Puedes encontrarme en...</h2>
          <div class="top_contact">
            <div class="contact_way">
              <i class="fab fa-linkedin"></i>
              <h3>Linkedin</h3>
            </div>
            <div class="contact_way">
              <i class="fa fa-twitter"></i>
              <h3>Twitter</h3>
            </div>
            <div class="contact_way">
              <h3>@Enviar Email</h3>
            </div>
          </div>
          <div class="bottom_contact">
            <div class="contact_way">
              <i class="fab fa-github"></i>
              <h3>Github</h3>
            </div>
            <div class="contact_way">
              <i class="fa fa-mobile"></i>
              <h3>Télefono</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer">
      <div class="container">Todos los derechos reservados 'Coding Channel'. © 2024.</div>
    </footer>
  </body>
</html>
  `,
  cssContent: `
 @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
:root {
  --lighting-color: #0089b7;
  --dark-color: #00000;
  --darker-color: #00000;
  --secondary-color: #B4B4B4;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}
body,
html {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  line-height: 1.4;
  scroll-behavior: smooth;
  color: black;
}
body {
  font-size: 1.4rem;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
}
a {
  text-decoration: none;
  color: white;
}
ul {
  list-style: none;
}
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #0089b7;
}

section {
  scroll-margin-top: 50px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
nav ul {
  display: flex;
  gap: 1rem;
}
nav li {
  font-size: 1.8rem;
  border-bottom: 0.4rem transparent solid;
  transition: 0.3s ease-in-out;
}
nav li:hover {
  border-bottom: 0.4rem var(--secondary-color) solid;
  transition: 0.3s ease-in-out;
}
.logo {
  font-size: 2rem;
  font-weight: 700;
}

#hero {
  background: var(--dark-color);
  padding: 4rem 0;
  border-bottom: 4px solid var(--lighting-color);
  max-height: 100vh;
}
#hero .container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.hero_content {
  display: grid;
  place-items: center;
}

#hero h1 {
  font-size: 3rem;
  font-weight: bold;
}

.hi_text {
  font-size: 6rem;
  font-weight: bold;
  color: var(--secondary-color);
}
.name_text {
  font-size: 5rem;
}

#hero h2 {
  font-size: 4rem;
  font-weight: bold;

  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */ /* Adjust as needed */
  animation: typing 5s steps(40, end), blink-caret 0.75s step-end infinite;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

/* Project Section */

#project {
  background: var(--darker-color);
}

#project h2 {
  font-size: 6rem;
  text-align: center;
  padding: 2rem 0;
}
.project_container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}
.grid_item {
  display: grid;
  place-items: center;
}

.card {
  width: 320px;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: 0.2s ease-in-out;
}
.card:hover {
  transform: scale(1.05);
  transition: 1s ease-in-out;
}
.card:hover img {
  transform: scale(1.05);
  transition: 0.3s ease-in-out;
  opacity: 0.8;
}
.card:hover .card_content {
  background: white;
  color: var(--lighting-color);
  transform: translateY(0px);
}

.card_content {
  padding: 2rem;
  position: relative;
  top: -6.5rem;
  margin-bottom: -6.5rem;
  transition: 0.5s ease-in-out;
  transform: translateY(100px);
}
.card_content h3 {
  text-align: center;
}

/* Contact Section */
#contact {
  background: var(--dark-color);
}

#contact h2 {
  font-size: 6rem;
  text-align: center;
  margin: 2rem 0;
}

#contact .container {
  height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
}

.top_contact {
  max-width: 800px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
}
.contact_way {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.contact_way i {
  font-size: 3rem;
}
.contact_way h3 {
  font-size: 3rem;
  font-weight: bold;
}

.bottom_contact {
  max-width: 400px;
  gap: 1rem;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
}

/* Footer */

.footer {
  background-color: #0089b7;
  padding: 2rem;
  color: white;
  font-size: 1.6rem;
  text-align: center;
}

/* Media Query */

@media (max-width: 786px) {
  html {
    font-size: 40%;
  }
  #hero .container {
    flex-direction: column;
  }
  .hero_image {
    display: grid;
    place-items: center;
  }
  #contact .container {
    height: 70vh;
  }
}
@media (max-width: 500px) {
  html {
    font-size: 32%;
  }
  #hero .container {
    flex-direction: column;
  }
  .hero_image {
    display: grid;
    place-items: center;
  }
  #contact .container {
    height: 50vh;
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
      imageUrl:'/images/template2/template.png',
      description: 'Una plantilla para un negocio de comida.',
      htmlContent: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="icon"
      type="image/x-icon"
      href="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/220px-Zomato_logo.png"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <title>Restaurante</title>
  </head>
  <body>
    <section class="hero__section">
      <header>
        <nav class="navbar">
          <a href="#">Descarga la app</a>
          <div class="navbar__menu_container">
            <a href="#" class="link">Afiliados</a>
            <a href="#" class="link">Lugares</a>
            <a href="#" class="link">Entrar</a>
            <a href="#" class="link">Resgistro</a>
            <a href="#" class="user__icon">
              <i class="fa-solid fa-user"></i>
            </a>
          </div>
        </nav>
      </header>
      <div class="hero__section_container">
         <h1 class="hero__section_title">
          NOMBRE DEL RESTAURANTE
        </h1>
        <h1 class="hero__section_title">
          La mejor comida y bebida de la ciudad
        </h1>
        <div class="hero__section_input_container">
          <input
            class="input_container_location"
            type="text"
            placeholder="CDMX, mex 1234"
          />
          <input
            class="input_container_search"
            type="text"
            placeholder="Buscar tu restaurante cercano"
          />
        </div>
      </div>
    </section>

    <section class="container we__offer">
      <div class="card">
        <img src="../images/template2/item1.png" alt="" />
        <h2>Ordena en línea</h2>
        <p>Quedate en casa y orderna desde ahí</p>
      </div>
      <div class="card">
        <img src="../images/template2/item2.png" alt="" />
        <h2>Cena</h2>
        <p>Cena tu comida favorita con nosotros </p>
      </div>
      <div class="card">
        <img src="../images/template2/item3.png" alt="" />
        <h2>Tragos y licor</h2>
        <p>En la noche pueden acompañarnos</p>
      </div>
    </section>

   
    <section class="container get__the_app">
      <div class="semiContainer">
        <div class="left">
          <img src="../images/template2/mobileBanner.png" alt="banner" />
        </div>
        <div class="right">
          <h1>Descarga la app</h1>

          <p>
            Cuando te mandadmos el link, abrelo para descargar la app.
          </p>

          <div class="radio__buttons_container">
            <div>
              <input type="radio" id="email" name="download_app" />
              <label for="email" style="font-size: 14px">Correo</label>
            </div>
            <div>
              <input type="radio" id="phone" name="download_app" />
              <label for="phone" style="font-size: 14px">Teléfono</label>
            </div>
          </div>

          <div class="input_container">
            <input type="text" placeholder="Correo" />
            <button>Compartir link</button>
          </div>

          <div class="download__app_container">
            <h5>Descarga la app desde</h5>
            <div>
              <img src="../images/template2/playStore.png" alt="" />
              <img src="../images/template2/appleStore.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer_section1">
         <h1 class="hero__section_title">
          NOMBRE DEL RESTAURANTE
        </h1>
        <div class="section1__buttonContainer">
          <button>
            <img
              src="https://flagcdn.com/w40/mx.png"
              alt="México"
              style="width: 17px"
            />
            México
          </button>
          <button>
            <i class="fa fa-globe" aria-hidden="true"></i> Español
          </button>
        </div>
      </div>
      <div class="navigation_container">
        <div class="link__container">
          <h5>Sobre nosotros</h5>
          <a class="footer__link" href="#">Who we are</a>
          <a class="footer__link" href="#">Blogs</a>
          <a class="footer__link" href="#">Work with us</a>
          <a class="footer__link" href="#">Investor Relations</a>
          <a class="footer__link" href="#">Report Fraud</a>
        </div>

        <div class="link__container">
          <h5>ZOMAVERSE</h5>
          <a class="footer__link" href="#">Zomato</a>
          <a class="footer__link" href="#">Feeding India</a>
          <a class="footer__link" href="#">Hyperpuer</a>
          <a class="footer__link" href="#">Zomaland</a>
        </div>

        <div class="link__container">
          <h5>FOR RESTAURANTS</h5>
          <a class="footer__link" href="#">Partner With Us</a>
          <a class="footer__link" href="#">App For You</a>
          <br />
          <h5>FOR ENTERPRISES</h5>
          <a class="footer__link" href="#">Zomato For Work</a>
        </div>

        <div class="link__container">
          <h5>LERN MORE</h5>
          <a class="footer__link" href="#">Privacy</a>
          <a class="footer__link" href="#">Security</a>
          <a class="footer__link" href="#">Terms</a>
          <a class="footer__link" href="#">Sitemap</a>
        </div>

        <div class="link__container">
          <h5>SOCIAL LINKS</h5>
          <div class="social__links_container">
            <button><i class="fa-brands fa-linkedin-in"></i></button>
            <button><i class="fa-brands fa-instagram"></i></button>
            <button><i class="fa-brands fa-twitter"></i></button>
            <button><i class="fa-brands fa-youtube"></i></button>
            <button><i class="fa-brands fa-facebook-f"></i></button>
          </div>
          <br />
          <img src="../images/template2/appleStore.png" alt="" class="footer__store_logos" />
          <img src="../images/template2/playStore.png" alt="" class="footer__store_logos" />
        </div>
      </div>
      <p class="disclamer">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners. 2008-2022 © Zomato™ Ltd. All
        rights reserved.
      </p>
    </footer>
  </body>
</html>
      `,
      cssContent: `
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.hero__section {
  background: url("https://images.unsplash.com/photo-1530329650488-10f6eff05388?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center;
  background-size: cover;
  color: white;
  min-height: 60vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 48px;
  height: 60px;
}

.navbar a {
  text-decoration: none;
  color: white;
  /* font-weight: 300; */
}

.navbar__menu_container {
  display: flex;
  gap: 20px;
}

.user__icon {
  height: 30px;
  width: 30px;
  border-radius: 100%;
  border: solid 1px white;
  align-items: center;
  justify-content: center;
  display: none;
}

.hero__section_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(60vh - 60px);
  gap: 32px;
}

.hero__section_logo {
  width: 250px;
  height: auto;
}

.hero__section_title {
  text-align: center;
  font-size: 30px;
  font-weight: 400;
}

.hero__section_input_container {
  background: white;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 50%;
}

.input_container_location,
.input_container_search {
  padding: 5px;
  border: none;
  outline: none;
}

.input_container_search {
  width: 70%;
}

.input_container_location {
  width: 30%;
  border-right: 2px solid #e0e0e0;
}

@media only screen and (max-width: 600px) {
  .navbar__menu_container .link {
    display: none;
  }

  .user__icon {
    display: flex;
  }

  .navbar {
    padding: 16px;
  }

  .hero__section {
    min-height: 80vh;
  }

  .hero__section_input_container {
    flex-direction: column;
    background-color: transparent;
    width: 100%;
  }

  .input_container_location,
  .input_container_search {
    padding: 15px;
    border-radius: 10px;
    width: 90%;
  }

  .hero__section_container {
    height: calc(80vh - 60px);
  }

  .input_container_location {
    border-right: none;
  }
}

.container {
  margin: 48px auto;
  width: 80%;
}

.we__offer {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: center;
}

.we__offer .card {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  transition: all 300ms ease-out;
}

.we__offer .card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
}

.we__offer .card h2 {
  padding: 10px 10px 0 10px;
  font-size: 20px;
  font-weight: 400;
}

.we__offer .card p {
  font-size: 13px;
  padding: 0 10px 15px 10px;
}

.we__offer .card:hover {
  transform: scale(1.05);
}

.collections h1 {
  font-weight: 400;
}

.collections .sub__heading_container {
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.sub__heading_container span:nth-child(2) {
  color: #ff7e8b;
  font-size: 13px;
}

.collections_card_container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
}

.collections_card_container .card {
  height: 300px;
  min-width: 240px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
}

.card1 {
  background-image: url("../images/template2/collection1.jpg");
}

.card2 {
  background-image: url("../images/template2/collection2.jpg");
}

.card3 {
  background-image: url("../images/template2/collection3.jpg");
}

.card4 {
  background-image: url("../images/template2/collection4.jpg");
}

.overlay {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.05) 50%,
    rgba(0, 0, 0, 0.05) 85%
  );
  width: 100%;
  height: 100%;
  display: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
}

.collections_card_container .card .content {
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
  padding: 12px 16px;
  font-size: 14px;
}

.content h4 {
  font-weight: 400;
}

.get__the_app {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 251, 247);
  width: 100%;
  padding: 48px 48px;
}

.get__the_app .semiContainer {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.get__the_app .semiContainer .left {
  flex: 2;
}

.get__the_app .semiContainer .left img {
  width: 100%;
  object-fit: cover;
}

.get__the_app .semiContainer .right {
  flex: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.right h1 {
  font-weight: 500;
  font-size: 32px;
}

.right p {
  font-size: 14px;
}

.semiContainer .right .radio__buttons_container {
  display: flex;
  align-items: center;
  gap: 16px;
}

.semiContainer .right .radio__buttons_container div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.semiContainer .right .radio__buttons_container div input {
  height: 15px;
  width: 15px;
  accent-color: rgb(239, 79, 95);
}

.semiContainer .right .input_container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.input_container button,
.input_container input {
  padding: 10px 12px;
}

.input_container input {
  border: 1.5px solid gray;
  outline: none;
  border-radius: 5px;
  flex: auto;
}

.input_container button {
  border: none;
  background-color: rgb(239, 79, 95);
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.right .download__app_container {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.download__app_container h5 {
  font-weight: 400;
  color: gray;
}

.download__app_container div {
  display: flex;
  gap: 16px;
}

.download__app_container div img {
  width: 35%;
}

@media only screen and (max-width: 1300px) {
  .get__the_app .semiContainer .left {
    flex: 1;
  }

  .get__the_app .semiContainer .right {
    flex: 1;
  }

  .get__the_app .semiContainer {
    width: 80%;
  }
}

@media only screen and (max-width: 900px) {
  .get__the_app {
    padding: 2rem;
  }

  .get__the_app .semiContainer {
    width: 90%;
  }
}

@media only screen and (max-width: 700px) {
  .get__the_app {
    padding: 3rem 0;
  }
  .get__the_app .semiContainer {
    width: 80%;
    flex-direction: column;
  }
}

.footer {
  width: 100%;
}

.footer_section1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: auto;
}

.footer_section1 img {
  width: 120px;
  height: auto;
}

.section1__buttonContainer {
  display: flex;
  gap: 16px;
}

.section1__buttonContainer button {
  padding: 5px;
  width: 90px;
  border: 1px solid gray;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
}

.navigation_container {
  display: grid;
  width: 90%;
  margin: auto;

  /* grid-template-columns:  1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(5, 1fr);

  gap: 1rem;
  padding: 48px 0;
}

.link__container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.link__container h5 {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
  letter-spacing: 0.8px;
}

.footer__link {
  text-decoration: none;
  color: gray;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.5px;
}

.footer__link:hover {
  color: black;
}

.social__links_container {
  display: flex;
  gap: 0.5rem;
}

.social__links_container button {
  background-color: black;
  border: none;
  width: 25px;
  height: 25px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social__links_container button i {
  color: white;
  font-size: 13px;
}

.footer__store_logos {
  width: 100%;
}

.footer .disclamer {
  width: 90%;
  margin: auto;
  padding: 20px 0;
  font-size: 12px;
  color: gray;
  border-top: 1px solid gray;
}

@media only screen and (max-width: 900px) {
  .navigation_container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 600px) {
  .navigation_container {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 450px) {
  .footer_section1 {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .navigation_container {
    grid-template-columns: 1fr;
  }
}
      `,
      jsContent: `

      `,
    },
    {
      id: 3,
      name: 'Plantilla de Agencia de Viajes',
      subtheme: 'Agencia',
      imageUrl:'/images/template3/template.png',
      description: 'Una landing page para agencia digital de viajes.',
      htmlContent: `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tourest - Explore the World</title>

  <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml">


  <link rel="stylesheet" href="./assets/css/style.css">


  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Comforter+Brush&family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet">

</head>

<body id="top">


  <header class="header" data-header>
    <div class="container">

      <a href="#">
        <h1 class="logo">VIAJES</h1>
      </a>

      <button class="nav-toggle-btn" data-nav-toggle-btn aria-label="Toggle Menu">
        <ion-icon name="menu-outline" class="open"></ion-icon>
        <ion-icon name="close-outline" class="close"></ion-icon>
      </button>

      <nav class="navbar">

        <ul class="navbar-list">

          <li>
            <a href="#" class="navbar-link">inicio</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Sobre nosotros</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Tours</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Destinos</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Blog</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Contacto</a>
          </li>

        </ul>

        <a href="#" class="btn btn-secondary">Buscar ahora</a>

      </nav>

    </div>
  </header>





  <main>
    <article>

      <!-- 
        - #HERO
      -->

      <section class="section hero"
        style="background-image: url('../images/template3/hero-bg-bottom.png') url('../images/template3/hero-bg-top.png')">
        <div class="container">

          <img src="../images/template3/shape-1.png" width="61" height="61" alt="Vector Shape" class="shape shape-1">

          <img src="../images/template3/shape-2.png" width="56" height="74" alt="Vector Shape" class="shape shape-2">

          <img src="../images/template3/shape-3.png" width="57" height="72" alt="Vector Shape" class="shape shape-3">

          <div class="hero-content">

            <p class="section-subtitle">Explora tu viaje</p>

            <h2 class="hero-title">Agencia de viajes</h2>

            <p class="hero-text">
              Viaja con nosotros, tenemos los mejores paquetes en promoción para ti.
            </p>

            <div class="btn-group">
              <a href="#" class="btn btn-primary">Contacto</a>

              <a href="#" class="btn btn-outline">Leer Más</a>
            </div>

          </div>

          <figure class="hero-banner">
            <img src="../images/template3/hero-banner.png" width="686" height="812" loading="lazy" alt="hero banner"
              class="w-100">
          </figure>

        </div>
      </section>





      <!-- 
        - #DESTINATION
      -->

      <section class="section destination">
        <div class="container">

          <p class="section-subtitle">Destinations</p>

          <h2 class="h2 section-title">Choose Your Place</h2>

          <ul class="destination-list">

            <li class="w-50">
              <a href="#" class="destination-card">

                <figure class="card-banner">
                  <img src="../images/template3/destination-1.jpg" width="1140" height="1100" loading="lazy"
                    alt="Malé, Maldives" class="img-cover">
                </figure>

                <div class="card-content">
                  <p class="card-subtitle">Malé</p>

                  <h3 class="h3 card-title">Maldives</h3>
                </div>

              </a>
            </li>

            <li class="w-50">
              <a href="#" class="destination-card">

                <figure class="card-banner">
                  <img src="../images/template3/destination-2.jpg" width="1140" height="1100" loading="lazy"
                    alt="Bangkok, Thailand" class="img-cover">
                </figure>

                <div class="card-content">
                  <p class="card-subtitle">Bangkok</p>

                  <h3 class="h3 card-title">Thailand</h3>
                </div>

              </a>
            </li>

            <li>
              <a href="#" class="destination-card">

                <figure class="card-banner">
                  <img src="../images/template3/destination-3.jpg" width="1110" height="480" loading="lazy"
                    alt="Kuala Lumpur, Malaysia" class="img-cover">
                </figure>

                <div class="card-content">
                  <p class="card-subtitle">Kuala Lumpur</p>

                  <h3 class="h3 card-title">Malaysia</h3>
                </div>

              </a>
            </li>

            <li>
              <a href="#" class="destination-card">

                <figure class="card-banner">
                  <img src="../images/template3/destination-4.jpg" width="1110" height="480" loading="lazy"
                    alt="Kathmandu, Nepal" class="img-cover">
                </figure>

                <div class="card-content">
                  <p class="card-subtitle">Kathmandu</p>

                  <h3 class="h3 card-title">Nepal</h3>
                </div>

              </a>
            </li>

            <li>
              <a href="#" class="destination-card">

                <figure class="card-banner">
                  <img src="../images/template3/destination-5.jpg" width="1110" height="480" loading="lazy"
                    alt="Jakarta, Indonesia" class="img-cover">
                </figure>

                <div class="card-content">
                  <p class="card-subtitle">Jakarta</p>

                  <h3 class="h3 card-title">Indonesia</h3>
                </div>

              </a>
            </li>

          </ul>

        </div>
      </section>





      <!-- 
        - #POPULAR
      -->

      <section class="section popular">
        <div class="container">

          <p class="section-subtitle">Featured Tours</p>

          <h2 class="h2 section-title">Most Popular Tours</h2>

          <ul class="popular-list">

            <li>
              <div class="popular-card">

                <figure class="card-banner">
                  <a href="#">
                    <img src="../images/template3/popular-1.jpg" width="740" height="518" loading="lazy"
                      alt="Kuala Lumpur, Malaysia" class="img-cover">
                  </a>

                  <span class="card-badge">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="P12D">12 Days</time>
                  </span>
                </figure>

                <div class="card-content">

                  <div class="card-wrapper">
                    <div class="card-price">From $50.00</div>

                    <div class="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>

                      <data value="2">(2)</data>
                    </div>
                  </div>

                  <h3 class="card-title">
                    <a href="#">A good traveler has no fixed plans and is not intent on arriving.</a>
                  </h3>

                  <address class="card-location">Kuala Lumpur, Malaysia</address>

                </div>

              </div>
            </li>

            <li>
              <div class="popular-card">

                <figure class="card-banner">
                  <a href="#">
                    <img src="../images/template3/popular-2.jpg" width="740" height="518" loading="lazy"
                      alt="Kuala Lumpur, Malaysia" class="img-cover">
                  </a>

                  <span class="card-badge">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="P12D">12 Days</time>
                  </span>
                </figure>

                <div class="card-content">

                  <div class="card-wrapper">
                    <div class="card-price">From $50.00</div>

                    <div class="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>

                      <data value="2">(2)</data>
                    </div>
                  </div>

                  <h3 class="card-title">
                    <a href="#">A good traveler has no fixed plans and is not intent on arriving.</a>
                  </h3>

                  <address class="card-location">Kuala Lumpur, Malaysia</address>

                </div>

              </div>
            </li>

            <li>
              <div class="popular-card">

                <figure class="card-banner">
                  <a href="#">
                    <img src="../images/template3/popular-3.jpg" width="740" height="518" loading="lazy"
                      alt="Kuala Lumpur, Malaysia" class="img-cover">
                  </a>

                  <span class="card-badge">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="P12D">12 Days</time>
                  </span>
                </figure>

                <div class="card-content">

                  <div class="card-wrapper">
                    <div class="card-price">From $50.00</div>

                    <div class="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>

                      <data value="2">(2)</data>
                    </div>
                  </div>

                  <h3 class="card-title">
                    <a href="#">A good traveler has no fixed plans and is not intent on arriving.</a>
                  </h3>

                  <address class="card-location">Kuala Lumpur, Malaysia</address>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>





      <!-- 
        - #ABOUT
      -->

      <section class="section about">
        <div class="container">

          <div class="about-content">

            <p class="section-subtitle">About Us</p>

            <h2 class="h2 section-title">Explore all tour of the world with us.</h2>

            <p class="about-text">
              Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
              randomised words
              which don't look even slightly believable.
            </p>

            <ul class="about-list">

              <li class="about-item">

                <div class="about-item-icon">
                  <ion-icon name="compass"></ion-icon>
                </div>

                <div class="about-item-content">
                  <h3 class="h3 about-item-title">Tour guide</h3>

                  <p class="about-item-text">
                    Lorem Ipsum available, but the majority have suffered alteration in some.
                  </p>
                </div>

              </li>

              <li class="about-item">

                <div class="about-item-icon">
                  <ion-icon name="briefcase"></ion-icon>
                </div>

                <div class="about-item-content">
                  <h3 class="h3 about-item-title">Friendly price</h3>

                  <p class="about-item-text">
                    Lorem Ipsum available, but the majority have suffered alteration in some.
                  </p>
                </div>

              </li>

              <li class="about-item">

                <div class="about-item-icon">
                  <ion-icon name="umbrella"></ion-icon>
                </div>

                <div class="about-item-content">
                  <h3 class="h3 about-item-title">Reliable tour</h3>

                  <p class="about-item-text">
                    Lorem Ipsum available, but the majority have suffered alteration in some.
                  </p>
                </div>

              </li>

            </ul>

            <a href="#" class="btn btn-primary">Booking Now</a>

          </div>

          <figure class="about-banner">
            <img src="../images/template3/about-banner.png" width="756" height="842" loading="lazy" alt="" class="w-100">
          </figure>

        </div>
      </section>





      <!-- 
        - #BLOG
      -->

      <section class="section blog">
        <div class="container">

          <p class="section-subtitle">From The Blog Post</p>

          <h2 class="h2 section-title">Latest News & Articles</h2>

          <ul class="blog-list">

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src="../images/template3/popular-1.jpg" width="740" height="518" loading="lazy"
                      alt="A good traveler has no fixed plans and is not intent on arriving." class="img-cover">
                  </a>

                  <span class="card-badge">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="12-04">04 Dec</time>
                  </span>

                </figure>

                <div class="card-content">

                  <div class="card-wrapper">

                    <div class="author-wrapper">
                      <figure class="author-avatar">
                        <img src="../images/template3/author-avatar.png" width="30" height="30" alt="Jony bristow">
                      </figure>

                      <div>
                        <a href="#" class="author-name">Jony bristow</a>

                        <p class="author-title">Admin</p>
                      </div>
                    </div>

                    <time class="publish-time" datetime="10:30">10:30 AM</time>

                  </div>

                  <h3 class="card-title">
                    <a href="#">
                      A good traveler has no fixed plans and is not intent on arriving.
                    </a>
                  </h3>

                  <a href="#" class="btn-link">
                    <span>Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src="../images/template3/blog-2.jpg" width="740" height="518" loading="lazy"
                      alt="A good traveler has no fixed plans and is not intent on arriving." class="img-cover">
                  </a>

                  <span class="card-badge">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="12-04">04 Dec</time>
                  </span>

                </figure>

                <div class="card-content">

                  <div class="card-wrapper">

                    <div class="author-wrapper">
                      <figure class="author-avatar">
                        <img src="../images/template3/author-avatar.png" width="30" height="30" alt="Jony bristow">
                      </figure>

                      <div>
                        <a href="#" class="author-name">Jony bristow</a>

                        <p class="author-title">Admin</p>
                      </div>
                    </div>

                    <time class="publish-time" datetime="10:30">10:30 AM</time>

                  </div>

                  <h3 class="card-title">
                    <a href="#">
                      A good traveler has no fixed plans and is not intent on arriving.
                    </a>
                  </h3>

                  <a href="#" class="btn-link">
                    <span>Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src="../images/template3/blog-3.jpg" width="740" height="518" loading="lazy"
                      alt="A good traveler has no fixed plans and is not intent on arriving." class="img-cover">
                  </a>

                  <span class="card-badge">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="12-04">04 Dec</time>
                  </span>

                </figure>

                <div class="card-content">

                  <div class="card-wrapper">

                    <div class="author-wrapper">
                      <figure class="author-avatar">
                        <img src="../images/template3/author-avatar.png" width="30" height="30" alt="Jony bristow">
                      </figure>

                      <div>
                        <a href="#" class="author-name">Jony bristow</a>

                        <p class="author-title">Admin</p>
                      </div>
                    </div>

                    <time class="publish-time" datetime="10:30">10:30 AM</time>

                  </div>

                  <h3 class="card-title">
                    <a href="#">
                      A good traveler has no fixed plans and is not intent on arriving.
                    </a>
                  </h3>

                  <a href="#" class="btn-link">
                    <span>Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

    </article>
  </main>





  <!-- 
    - #FOOTER
  -->

  <footer class="footer" style="background-image: url('../images/template3/footer-bg.png')">
    <div class="container">

      <div class="footer-top">

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Top destination</p>
          </li>

          <li>
            <a href="#" class="footer-link">Indonesia, Jakarta</a>
          </li>

          <li>
            <a href="#" class="footer-link">Maldives, Malé</a>
          </li>

          <li>
            <a href="#" class="footer-link">Australia, Canberra</a>
          </li>

          <li>
            <a href="#" class="footer-link">Thailand, Bangkok</a>
          </li>

          <li>
            <a href="#" class="footer-link">Morocco, Rabat</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Categories</p>
          </li>

          <li>
            <a href="#" class="footer-link">Travel</a>
          </li>

          <li>
            <a href="#" class="footer-link">Lifestyle</a>
          </li>

          <li>
            <a href="#" class="footer-link">Fashion</a>
          </li>

          <li>
            <a href="#" class="footer-link">Education</a>
          </li>

          <li>
            <a href="#" class="footer-link">Food & Drink</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Quick links</p>
          </li>

          <li>
            <a href="#" class="footer-link">About</a>
          </li>

          <li>
            <a href="#" class="footer-link">Contact</a>
          </li>

          <li>
            <a href="#" class="footer-link">Tours</a>
          </li>

          <li>
            <a href="#" class="footer-link">Booking</a>
          </li>

          <li>
            <a href="#" class="footer-link">Terms & Conditions</a>
          </li>

        </ul>

        <div class="footer-list">

          <p class="footer-list-title">Get a newsletter</p>

          <p class="newsletter-text">
            For the latest deals and tips, travel no further than your inbox
          </p>

          <form action="" class="newsletter-form">
            <input type="email" name="email" required placeholder="Email address" class="newsletter-input">

            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>

        </div>

      </div>

      <div class="footer-bottom">

        <a href="#" class="logo">Tourest</a>

        <p class="copyright">
          &copy; 2022 <a href="#" class="copyright-link">codewithsadee</a>. All Rights Reserved
        </p>

        <ul class="social-list">

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-google"></ion-icon>
            </a>
          </li>

        </ul>

      </div>

    </div>
  </footer>





  <!-- 
    - #GO TO TOP
  -->

  <a href="#top" class="go-top" data-go-top aria-label="Go To Top">
    <ion-icon name="chevron-up-outline"></ion-icon>
  </a>

  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</body>
</html>
      `,
      cssContent: `
:root {

  /**
   * colors
   */

  --battleship-gray: hsl(0, 0%, 53%);
  --viridian-green: hsl(180, 98%, 31%);
  --silver-chalice: hsl(0, 0%, 69%);
  --mikado-yellow: hsl(47, 98%, 50%);
  --granite-gray: hsl(0, 0%, 40%);
  --independence: hsl(219, 20%, 32%);
  --spanish-gray: hsl(0, 0%, 61%);
  --oxford-blue: hsl(222, 46%, 17%);
  --black-coral: hsl(223, 8%, 44%);
  --eerie-black: hsl(210, 11%, 15%);
  --light-gray: hsl(0, 0%, 80%);
  --white-2: hsl(0, 0%, 98%);
  --white-1: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);
  --jet: hsl(0, 0%, 20%);

  /**
   * typography
   */

  --ff-abril-fatface: 'Abril Fatface', cursive;
  --ff-comforter-brush: 'Comforter Brush', cursive;
  --ff-heebo: 'Heebo', sans-serif;

  --fs-1: 3.4rem;
  --fs-2: 3.2rem;
  --fs-3: 3rem;
  --fs-4: 2.4rem;
  --fs-5: 1.8rem;
  --fs-6: 1.7rem;
  --fs-7: 1.4rem;
  --fs-8: 1.2rem;

  --fw-400: 400;
  --fw-500: 500;
  --fw-600: 600;
  --fw-700: 700;

  /**
   * border radius
   */

  --radius-6: 6px;

  /**
   * spacing
   */

  --section-padding: 40px;

  /**
   * transition
   */

  --transition-1: 0.15s ease;
  --transition-2: 0.35s ease;
  --cubic-out: cubic-bezier(0.33, 0.85, 0.56, 1.02);

}


*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li { list-style: none; }

a { text-decoration: none; }

a,
img,
span,
input,
button,
ion-icon { display: block; }

input,
button {
  border: none;
  background: none;
  font: inherit;
}

button { cursor: pointer; }

input { width: 100%; }

img { height: auto; }

address { font-style: normal; }

:focus-visible { outline-offset: 5px; }

html {
  font-family: var(--ff-heebo);
  font-size: 10px;
  scroll-behavior: smooth;
}

body {
  background: var(--white-1);
  font-size: 1.6rem;
}

::-webkit-scrollbar { width: 10px; }

::-webkit-scrollbar-track { background: hsl(0, 0%, 95%); }

::-webkit-scrollbar-thumb { background: hsl(0, 0%, 80%); }

::-webkit-scrollbar-thumb:hover { background: hsl(0, 0%, 70%); }


.container { padding-inline: 15px; }

.btn {
  background: var(--background, var(--white-1));
  color: var(--color, var(--viridian-green));
  font-weight: var(--fw-700);
  width: max-content;
  padding: 10px 25px;
  border: 2px solid var(--border-color, var(--white-1));
  border-radius: var(--radius-6);
}

.btn-secondary:is(:hover, :focus) {
  --background: transparent;
  --color: var(--white-1);
}

.btn-primary {
  --background: var(--viridian-green);
  --color: var(--white-1);
  --border-color: var(--viridian-green);
}

.btn-primary:is(:hover, :focus) {
  --background: transparent;
  --color: var(--viridian-green);
}

.btn-outline {
  --color: var(--oxford-blue);
  --border-color: var(--silver-chalice);
}

.btn-outline:is(:hover, :focus) {
  --color: var(--viridian-green);
  --border-color: var(--viridian-green);
}

.section { padding-block: var(--section-padding); }

.section-subtitle {
  font-family: var(--ff-comforter-brush);
  color: var(--mikado-yellow);
  font-size: var(--fs-3);
}

.w-100 { width: 100%; }

.h2 {
  color: var(--jet);
  font-size: var(--fs-3);
  font-weight: var(--fw-500);
}

.h3 {
  font-size: var(--fs-4);
  font-weight: var(--fw-400);
}

.section-title { font-family: var(--ff-abril-fatface); }

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-banner { background: var(--silver-chalice); }

:is(.popular, .blog) .section-subtitle {
  text-align: center;
  margin-bottom: 10px;
}

:is(.popular, .blog) .section-title {
  text-align: center;
  margin-bottom: 50px;
}

.popular-list,
.blog-list {
  display: grid;
  gap: 30px;
}

.popular-card,
.blog-card {
  box-shadow: 0 10px 30px hsla(0, 0%, 0%, 0.1);
  border-radius: var(--radius-6);
  overflow: hidden;
}

:is(.popular, .blog) .card-banner { position: relative; }

.card-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: var(--mikado-yellow);
  color: var(--white-1);
  padding: 14px 10px;
  border-radius: var(--radius-6);
}

.card-badge ion-icon {
  --ionicon-stroke-width: 60px;
  font-size: 20px;
  margin-inline: auto;
}

.card-badge time { font-weight: var(--fw-700); }

:is(.popular, .blog) .card-content { padding: 30px 15px; }

.card-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}

:is(.popular, .blog) .card-title {
  color: var(--granite-gray);
  font-size: var(--fs-5);
  margin-block: 20px;
}

:is(.popular, .blog) .card-title > a { color: inherit; }

:is(.popular, .blog) .card-title > a:is(:hover, :focus) { color: var(--viridian-green); }



.header {
  background: var(--viridian-green);
  padding-block: 20px;
  height: 88px;
  overflow: hidden;
  transition: 0.25s var(--cubic-out);
}

.header.active {
  height: 425px;
  transition-duration: 0.35s;
}

.header .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: var(--white-1);
  font-size: var(--fs-2);
  font-weight: var(--fw-600);
}

.nav-toggle-btn.active .open,
.nav-toggle-btn .close { display: none; }

.nav-toggle-btn .open,
.nav-toggle-btn.active .close { display: block; }

.nav-toggle-btn ion-icon {
  color: var(--white-1);
  font-size: 35px;
  --ionicon-stroke-width: 40px;
}

.navbar {
  width: 100%;
  padding: 20px 10px;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition-1);
}

.header.active .navbar {
  opacity: 1;
  visibility: visible;
}

.navbar-list { margin-bottom: 15px; }

.navbar-link {
  color: var(--white-1);
  font-size: var(--fs-5);
  font-weight: var(--fw-500);
  padding-block: 10px 0;
  border-bottom: 2px solid transparent;
  width: max-content;
}

.navbar-link:is(:hover, :focus) { border-color: var(--white-1); }



.shape { display: none; }

.hero {
  background-repeat: no-repeat, no-repeat;
  background-position: bottom left, top right;
}

.hero-content { margin-bottom: 50px; }

.hero .section-subtitle { margin-bottom: 15px; }

.hero-title {
  color: var(--oxford-blue);
  font-size: var(--fs-1);
  font-family: var(--ff-abril-fatface);
  font-weight: var(--fw-500);
  line-height: 1.2;
  max-width: 11ch;
  margin-bottom: 15px;
}

.hero-text {
  color: var(--black-coral);
  font-size: var(--fs-7);
  line-height: 1.7;
  margin-bottom: 15px;
}

.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}



.destination .section-subtitle {
  text-align: center;
  margin-bottom: 15px;
}

.destination .section-title {
  text-align: center;
  margin-bottom: 60px;
}

.destination-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.destination-card {
  position: relative;
  border-radius: var(--radius-6);
  overflow: hidden;
}

.destination-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(hsla(222, 46%, 17%, 0), hsla(222, 46%, 17%, 0.7));
}

.destination-card img { transition: var(--transition-2); }

.destination-card:is(:hover, :focus) img { transform: scale(1.1); }

.destination-card .card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  z-index: 1;
}

.destination-card .card-subtitle {
  color: var(--mikado-yellow);
  font-family: var(--ff-comforter-brush);
  font-size: var(--fs-5);
}

.destination-card .card-title {
  color: var(--white-1);
  font-family: var(--ff-abril-fatface);
}



.popular-card :is(.card-price, .card-rating) {
  color: var(--white-1);
  font-size: var(--fs-8);
  padding: 5px 8px;
  border-radius: var(--radius-6);
}

.popular-card .card-price { background: var(--viridian-green); }

.popular-card .card-rating {
  background: var(--mikado-yellow);
  display: flex;
  align-items: center;
  gap: 2px;
}

.popular-card .card-rating ion-icon { font-size: 17px; }

.popular-card .card-rating data { margin-left: 4px; }

.popular-card .card-location { color: var(--spanish-gray); }




.about-content { margin-bottom: 50px; }

.about .section-subtitle { margin-bottom: 10px; }

.about .section-title { margin-bottom: 20px; }

.about-text,
.about-item-text {
  color: var(--battleship-gray);
  font-size: var(--fs-6);
  line-height: 1.7;
}

.about-text { margin-bottom: 30px; }

.about-list {
  display: grid;
  gap: 20px;
  margin-bottom: 40px;
}

.about-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.about-item-icon {
  background: var(--viridian-green);
  color: var(--white-1);
  font-size: 26px;
  padding: 16px;
  border-radius: 50%;
  margin-top: 5px;
}

.about-item-title {
  color: var(--granite-gray);
  font-weight: var(--fw-600);
  margin-bottom: 5px;
}




.blog { padding-bottom: 100px; }

.blog-card .author-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
}

.blog-card .card-wrapper {
  color: var(--spanish-gray);
  font-size: var(--fs-8);
  justify-content: space-between;
}

.author-name {
  color: var(--granite-gray);
  font-weight: var(--fw-500);
}

.btn-link {
  color: var(--viridian-green);
  font-weight: var(--fw-700);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
}

.btn-link ion-icon { font-size: 20px; }

.btn-link:is(:hover, :focus) { color: var(--oxford-blue); }



.footer {
  background-color: var(--oxford-blue);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: var(--light-gray);
  padding-block: 60px;
}

.footer a:not(.logo) { color: inherit; }

.footer-top {
  display: grid;
  gap: 30px;
  margin-bottom: 40px;
}

.footer-list-title {
  color: var(--white-1);
  font-size: var(--fs-4);
  font-weight: var(--fw-600);
  margin-bottom: 15px;
}

.footer-link {
  font-size: var(--fs-7);
  padding-block: 5px;
}

.footer .footer-link:is(:hover, :focus) { color: var(--white-1); }

.newsletter-text {
  font-size: var(--fs-7);
  margin-bottom: 30px;
  line-height: 1.7;
}

.newsletter-form { position: relative; }

.newsletter-input {
  background: var(--white-1);
  border-radius: var(--radius-6);
  padding: 24px;
  color: var(--eerie-black);
}

.newsletter-input:focus {
  outline: none;
  box-shadow: 0 0 0 5px hsla(216, 98%, 52%, 0.25);
}

.newsletter-form .btn-primary {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
}

.newsletter-form .btn-primary:is(:hover, :focus) {
  --background: var(--viridian-green);
  --color: var(--white-1);
}

.footer-bottom .logo {
  text-align: center;
  margin-bottom: 20px;
}

.copyright {
  text-align: center;
  margin-bottom: 20px;
  font-size: var(--fs-7);
}

.copyright-link {
  display: inline-block;
  text-decoration: underline;
}

.copyright-link:is(:hover, :focus) { text-decoration: none; }

.social-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.social-link {
  font-size: 17px;
  background: var(--independence);
  padding: 10px;
  border-radius: 50%;
}

.social-link:is(:hover, :focus) { background: var(--viridian-green); }



.go-top {
  position: fixed;
  bottom: 0;
  right: 15px;
  background: var(--viridian-green);
  color: var(--white-1);
  font-size: 20px;
  padding: 10px;
  border-radius: var(--radius-6);
  visibility: hidden;
  opacity: 0;
  transition: var(--transition-1);
}

.go-top.active {
  visibility: visible;
  opacity: 1;
  transform: translateY(-15px);
}

.go-top:is(:hover, :focus) { transform: translateY(-25px); }



/**
 * responsive for larger than 575px screen 
 */

@media (min-width: 575px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-1: 5rem;
    --fs-3: 4rem;
    --fs-8: 1.4rem;

  }



  /**
   * HERO
   */

  .hero-text { --fs-7: 1.8rem; }



  /**
   * FOOTER
   */

  .footer-top { grid-template-columns: 1fr 1fr; }

}





/**
 * responsive for larger than 768px screen 
 */

@media (min-width: 768px) {

  /**
   * REUSED STYLE
   */

  .container {
    max-width: 750px;
    margin-inline: auto;
  }

  .popular-list,
  .blog-list { grid-template-columns: 1fr 1fr; }



  /**
   * HERO
   */

  .hero {
    min-height: 550px;
    display: grid;
    place-items: center;
  }

  .hero .container {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  

  /**
   * DESTINATION
   */

  .destination-list > li { width: calc(33.33% - 20px); }

  .destination-list .w-50 { width: calc(50% - 20px); }



  /**
   * FOOTER
   */

  .footer { --fs-7: 1.6rem; }

  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer-bottom .logo,
  .copyright { margin-bottom: 0; }

}





/**
 * responsive for larger than 992px screen 
 */

@media (min-width: 992px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-2: 3.5rem;
    --fs-3: 4.4rem;

    /**
     * spacing
     */

    --section-padding: 60px;

  }



  /**
   * REUSED STYLE
   */

  .container { max-width: 980px; }

  .popular-list,
  .blog-list { grid-template-columns: repeat(3, 1fr); }



  /**
   * HEADER
   */

  .nav-toggle-btn { display: none; }

  .header,
  .header.active { height: unset; }

  .navbar {
    all: unset;
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  .navbar-list {
    margin-bottom: 0;
    margin-inline: auto;
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .navbar-link {
    font-weight: var(--fw-700);
    margin-bottom: 8px;
  }



  /**
   * HERO
   */

  .hero {
    position: relative;
    min-height: 680px;
  }

  .hero-title,
  .hero-text { margin-bottom: 35px; }

  .shape {
    display: block;
    position: absolute;
    animation: rotate 8s linear infinite;
  }

  .shape-1 {
    top: 60px;
    left: 47%;
  }

  .shape-2 {
    top: 20%;
    right: 50px;
    animation-delay: 0.25s;
  }

  .shape-3 {
    left: 40%;
    bottom: 20%;
    animation-delay: 0.5s;
  }

  @keyframes rotate {
    0% { transform: rotate(0); }
    100% { transform: rotate(1turn); }
  }



  /**
   * DESTINATION
   */

  .destination {
    --fs-4: 3.2rem;
    --fs-5: 2.6rem;
  }



  /**
   * ABOUT
   */

  .about .container {
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    align-items: center;
    gap: 30px;
  }

  .about-content { margin-bottom: 0; }



  /**
   * FOOTER
   */

  .footer-top { grid-template-columns: 1fr 1fr 1fr 2fr; }

}





/**
 * responsive for larger than 1200px screen 
 */

@media (min-width: 1200px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-1: 6rem;

  }



  /**
   * REUSED STYLE
   */

  .container { max-width: 1150px; }

  :is(.popular, .blog) .card-content { padding: 30px; }



  /**
   * HEADER
   */

  .navbar-list { gap: 50px; }



  /**
   * ABOUT
   */

  .about .container { grid-template-columns: 0.7fr 1fr; }

}
      `,
      jsContent: `
'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});
      `,
    },
    {
      id: 4,
      name: 'Plantilla de Aplicación',
      subtheme: 'App',
      imageUrl:'/images/template4/template.png',
      description: 'Una landing page para que los ususarios promocionen su app..',
      htmlContent: `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Plantilla APP</title>

  <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml">


  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@700;900&display=swap" rel="stylesheet">
</head>

<body id="top">

  <!-- 
    - #HEADER
  -->

  <header class="header" data-header>
    <div class="container">

      <a href="#" class="logo">NOMBRE EMPRESA</a>

      <nav class="navbar" data-navbar>
        <ul class="navbar-list container">

          <li>
            <a href="#home" class="navbar-link active" data-nav-link>Inicio</a>
          </li>

          <li>
            <a href="#features" class="navbar-link" data-nav-link>Ventajas</a>
          </li>

          <li>
            <a href="#about" class="navbar-link" data-nav-link>Sobre Nosotros</a>
          </li>

          <li>
            <a href="#app" class="navbar-link" data-nav-link>App</a>
          </li>

          <li>
            <a href="#blog" class="navbar-link" data-nav-link>Blog</a>
          </li>

          <li>
            <a href="#" class="navbar-link" data-nav-link>Contacto</a>
          </li>

          <li>
            <a href="#" class="btn btn-primary">Comenzar</a>
          </li>

        </ul>
      </nav>

      <button class="nav-toggle-btn" aria-label="toggle manu" data-nav-toggler>
        <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
      </button>

    </div>
  </header>





  <main>
    <article>

      <!-- 
        - #HERO
      -->

      <section class="section hero" aria-label="hero" id="home">
        <div class="container">

          <div class="hero-content">

            <p class="section-subtitle">La mejor aplicación móvil</p>

            <h1 class="h1 hero-title">Toma mejor impresión y maneja más las descargas con nosotros</h1>

            <p class="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et
              dolore magna
              aliqua. Ut enim ad minim veniamquis nostrud
            </p>

            <ul class="btn-list">

              <li>
                <a href="#" class="btn-item-link" aria-label="Download from app store">
                  <img src="../images/template4/app-store.png" width="185" height="69" alt="app store" class="img">
                </a>
              </li>

              <li>
                <a href="#" class="btn-item-link" aria-label="Download from play store">
                  <img src="../images/template4/play-store.png" width="185" height="69" alt="play store" class="img">
                </a>
              </li>

            </ul>

          </div>

          <figure class="hero-banner">
            <img src="../images/template4/hero-banner.png" width="769" height="804" alt="hero banner" class="w-100">
          </figure>

        </div>
      </section>





      <!-- 
        - #FEATURES
      -->

      <section class="section features" id="features" aria-label="features">
        <div class="container">

          <p class="section-subtitle">Ventaja de nuestra app</p>

          <h2 class="h2 section-title">Ventajas</h2>

          <ul class="features-list">

            <li class="features-item">
              <div class="features-card">

                <div class="card-icon">
                  <ion-icon name="create-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h3 card-title">Fácil de editar</h3>

                <p class="card-text">
                  Lorem ipsum dolor sit cons ectetur adipiscing
                </p>

              </div>
            </li>

            <li class="features-item">
              <div class="features-card">

                <div class="card-icon">
                  <ion-icon name="shield-checkmark-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h3 card-title">Segura</h3>

                <p class="card-text">
                  Lorem ipsum dolor sit cons ectetur adipiscing
                </p>

              </div>
            </li>

            <li class="features-item">
              <div class="features-card">

                <div class="card-icon">
                  <ion-icon name="settings-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h3 card-title">Usuario</h3>

                <p class="card-text">
                  Lorem ipsum dolor sit cons ectetur adipiscing
                </p>

              </div>
            </li>

            <li class="features-item">
              <div class="features-card">

                <div class="card-icon">
                  <ion-icon name="cube-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h3 card-title">Gratis</h3>

                <p class="card-text">
                  Lorem ipsum dolor sit cons ectetur adipiscing
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>





      <!-- 
        - #ABOUT
      -->

      <section class="section about" id="about" aria-label="about">
        <div class="container">

          <figure class="about-banner">
            <img src="../images/template4/about-banner.png" width="1262" height="1357" loading="lazy" alt="about banner"
              class="w-100">
          </figure>

          <div class="about-content">

            <p class="section-subtitle">Sobre nosotros</p>

            <h2 class="h2 section-title">Tenemos las mejores ventajas con nosotros </h2>

            <p class="section-text">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luc tus nec ullamcorper mattis,
              pulvinar
              dapibus leo. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luc tus nec ullam
              corpe
            </p>

            <ul class="about-list">

              <li class="about-item">

                <div class="item-icon">
                  <ion-icon name="folder" aria-hidden="true"></ion-icon>
                </div>

                <div>
                  <h3 class="h3 item-title">Diseño</h3>

                  <p class="item-text">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit Lorem ipsum dolor sit amet, consec tetur
                    adipiscing elit.
                  </p>
                </div>

              </li>

              <li class="about-item">

                <div class="item-icon">
                  <ion-icon name="pie-chart" aria-hidden="true"></ion-icon>
                </div>

                <div>
                  <h3 class="h3 item-title">Calidad</h3>

                  <p class="item-text">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit Lorem ipsum dolor sit amet, consec tetur
                    adipiscing elit.
                  </p>
                </div>

              </li>

            </ul>

            <a href="#" class="btn btn-secondary">Ver Más</a>

          </div>

        </div>
      </section>





      <!-- 
        - #ABOUT 2
      -->

      <section class="section about-2" aria-label="about">
        <div class="container">

          <div class="about-content">

            <p class="section-subtitle">Excelente diseño</p>

            <h2 class="h2 section-title">Trabajamos excelentes apps de startups</h2>

            <p class="section-text">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luc tus nec ullamcorper mattis,
              pulvinar
              dapibus leo. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luc tus nec ullam
              corper.
            </p>

            <p class="section-text">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luc tus nec ullamcorper mattis,
              pulvinar
              dapibus leo. Lorem ipsum dolor.
            </p>

            <a href="#" class="btn btn-secondary">Ver más</a>

          </div>

          <figure class="about-banner">
            <img src="../images/template4/about-banner-2.png" width="1146" height="1226" loading="lazy" alt="about banner"
              class="w-100">
          </figure>

        </div>
      </section>





      <!-- 
        - #APP
      -->

      <section class="section app" aria-label="app" id="app">
        <div class="container">

          <figure class="app-banner">
            <img src="../images/template4/app.png" width="449" height="608" loading="lazy" alt="app banner" class="w-100">
          </figure>

          <div class="app-content">

            <p class="section-subtitle">Descarga nuestra app</p>

            <h2 class="h2 section-title">Descarga nuestra app y comienza ahora</h2>

            <p class="section-text">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luc tus nec ullamcorper mattis,
              pulvinar
              dapibus leo. Lorem ipsum dolor sit amet con Lorem ipsum dolor
            </p>

            <ul class="btn-list">

              <li>
                <a href="#" class="btn-item-link" aria-label="Download from app store">
                  <img src="../images/template4/app-store.png" width="185" height="69" alt="app store" class="img">
                </a>
              </li>

              <li>
                <a href="#" class="btn-item-link" aria-label="Download from play store">
                  <img src="../images/template4/play-store.png" width="185" height="69" alt="play store" class="img">
                </a>
              </li>

            </ul>

          </div>

        </div>
      </section>





      <!-- 
        - #BLOG
      -->

      <section class="section blog" id="blog" aria-label="blog">
        <div class="container">

          <p class="section-subtitle">Blogs recientes</p>

          <h2 class="h2 section-title">Nuestras ultimas noticias</h2>

          <ul class="blog-list">

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 768; --height: 558;">
                  <img src="../images/template4/blog-1.jpg" width="768" height="558" loading="lazy"
                    alt="Build A Full Web Chat App From Our Scratch" class="img-cover">
                </figure>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li class="card-meta-item">
                      <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                      <time class="card-meta-text" datetime="2024-07-23">Julio 24, 2024</time>
                    </li>

                    <li class="card-meta-item">
                      <ion-icon name="chatbox-outline" aria-hidden="true"></ion-icon>

                      <p class="card-meta-text">21 Comment</p>
                    </li>

                  </ul>

                  <h3 class="h3">
                    <a href="#" class="card-title">Contruye una web completa con nuestra ayuda</a>
                  </h3>

                  <a href="#" class="btn btn-outline">Ver Más</a>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 768; --height: 558;">
                  <img src="../images/template4/blog-2.jpg" width="768" height="558" loading="lazy"
                    alt="Brush Strokes Energize Trees In Paintings" class="img-cover">
                </figure>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li class="card-meta-item">
                      <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                      <time class="card-meta-text" datetime="2024-07-23">Julio 24, 2024</time>
                    </li>

                    <li class="card-meta-item">
                      <ion-icon name="chatbox-outline" aria-hidden="true"></ion-icon>

                      <p class="card-meta-text">30 Comment</p>
                    </li>

                  </ul>

                  <h3 class="h3">
                    <a href="#" class="card-title">Implementa nuestro diseños a tu web completa</a>
                  </h3>

                  <a href="#" class="btn btn-outline">Ver Más</a>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 768; --height: 558;">
                  <img src="../images/template4/blog-3.jpg" width="768" height="558" loading="lazy"
                    alt="Insights on How to Improve Your Teaching." class="img-cover">
                </figure>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li class="card-meta-item">
                      <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                      <time class="card-meta-text" datetime="2024-07-23">Julio 24, 2024</time>
                    </li>

                    <li class="card-meta-item">
                      <ion-icon name="chatbox-outline" aria-hidden="true"></ion-icon>

                      <p class="card-meta-text">5 Comment</p>
                    </li>

                  </ul>

                  <h3 class="h3">
                    <a href="#" class="card-title">Aprende con nosotros sobre desarrollo web.</a>
                  </h3>

                  <a href="#" class="btn btn-outline">Ver Más</a>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

    </article>
  </main>





  <!-- 
    - #FOOTER
  -->

  <footer class="footer">

    <div class="section footer-top">
      <div class="container">

        <div class="footer-brand">

          <a href="#" class="logo">NOMBRE EMPRESA</a>

          <p class="section-text">
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla utimp erdiet commodo diam libero vitae nibh
            et jus cursus
            id rutrum lore imperdiet ut sem vitae risus tristique posuere
          </p>

          <ul class="social-list">

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-google"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Compañia</p>
          </li>

          <li>
            <a href="#" class="footer-link">Sobre nosotros</a>
          </li>

          <li>
            <a href="#" class="footer-link">Contacto</a>
          </li>

          <li>
            <a href="#" class="footer-link">Servicios</a>
          </li>

          <li>
            <a href="#" class="footer-link">Nuestro equipo</a>
          </li>

          <li>
            <a href="#" class="footer-link">Precios</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Otros Links</p>
          </li>

          <li>
            <a href="#" class="footer-link">Contacto</a>
          </li>

          <li>
            <a href="#" class="footer-link">Privacidad</a>
          </li>

          <li>
            <a href="#" class="footer-link">Descargas app</a>
          </li>

          <li>
            <a href="#" class="footer-link">Como trabajamos</a>
          </li>

          <li>
            <a href="#" class="footer-link">Condiciones</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Solo a un clic</p>
          </li>

          <li class="footer-item">
            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

            <a href="tel:+12023459999" class="item-link">+5530210513</a>
          </li>

          <li class="footer-item">
            <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

            <a href="mailto:supportvast@gmail.com" class="item-link">ejemplo@gmail.com</a>
          </li>

          <li class="footer-item">
            <ion-icon name="map-outline" aria-hidden="true"></ion-icon>

            <address class="item-link address">
              calle n 145,<br>
              CDMX, México
            </address>
          </li>

        </ul>

      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">

        <p class="copyright">
          &copy; Todos los derechos reservados 'codewithsadee' © 2024.
        </p>

      </div>
    </div>

  </footer>





  <!-- 
    - #BACK TO TOP
  -->

  <a href="#top" class="back-top-btn" aria-label="back to top" data-back-top-btn>
    <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
  </a>


  <!-- 
    - ionicon link
  -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</body>

</html>
      `,
      cssContent: `
:root {

  /**
   * colors
   */

  --russian-violet: hsl(269, 36%, 22%);
  --dark-purple: hsl(268, 22%, 15%);
  --eerie-black: hsl(240, 4%, 10%);
  --davys-gray: hsl(0, 0%, 34%);
  --light-gray: hsl(0, 0%, 84%);
  --cultured-1: hsl(0, 0%, 98%);
  --cultured-2: hsl(280, 14%, 96%);
  --cultured-3: hsl(280, 9%, 94%);
  --gainsboro: hsl(0, 1%, 85%);
  --black_10: hsla(0, 0%, 0%, 0.1);
  --black_5: hsla(0, 0%, 0%, 0.05);
  --pumpkin: hsl(22, 90%, 56%);
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);

  /**
   * typography
   */

  --ff-poppins: 'Poppins', sans-serif;
  --ff-roboto: 'Roboto', sans-serif;

  --fs-1: 3rem;
  --fs-2: 2rem;
  --fs-3: 1.5rem;
  --fs-4: 1.4rem;
  --fs-5: 1.3rem;

  --fw-900: 900;
  --fw-700: 700;
  --fw-600: 600;
  --fw-500: 500;

  /**
   * spacing
   */

  --section-padding: 50px;

  /**
   * box shadow
   */

  --shadow-1: 0px 0px 20px var(--black_10);
  --shadow-2: 0 0 20px 4px var(--black_5);

  /**
   * border radius
   */

  --radius-6: 6px;
  --radius-10: 10px;

  /**
   * transition
   */

  --transition-1: 0.25s ease;
  --transition-2: 0.5s ease;
  --cubic-in: cubic-bezier(0.51, 0.03, 0.64, 0.28);
  --cubic-out: cubic-bezier(0.33, 0.85, 0.4, 0.96);

}



*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li { list-style: none; }

a {
  text-decoration: none;
  color: inherit;
}

a,
img,
span,
button,
ion-icon { display: block; }

img { height: auto; }

button {
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
}

ion-icon { pointer-events: none; }

address { font-style: normal; }

html {
  font-family: var(--ff-poppins);
  font-size: 10px;
  scroll-behavior: smooth;
}

body {
  background-color: var(--white);
  font-size: 1.6rem;
  color: var(--davys-gray);
}

:focus-visible { outline-offset: 4px; }

::-webkit-scrollbar { width: 10px; }

::-webkit-scrollbar-track { background-color: hsl(0, 0%, 98%); }

::-webkit-scrollbar-thumb { background-color: hsl(0, 0%, 80%); }

::-webkit-scrollbar-thumb:hover { background-color: hsl(0, 0%, 70%); }





.container { padding-inline: 15px; }

.btn {
  color: var(--color, var(--white));
  font-size: var(--fs-4);
  max-width: var(--width, max-content);
  padding: 10px 20px;
  border-radius: var(--radius-10);
  transition: var(--transition-1);
}

.btn-primary,
.btn-secondary:is(:hover, :focus) { background-color: var(--pumpkin); }

.btn-primary:is(:hover, :focus),
.btn-secondary { background-color: var(--russian-violet); }

.btn-outline {
  --color: var(--pumpkin);
  --width: 100%;
  text-align: center;
  font-weight: var(--fw-500);
  border: 1px solid var(--cultured-3);
}

.btn-outline:is(:hover, :focus) {
  background-color: var(--pumpkin);
  color: var(--white);
}

.section { padding-block: var(--section-padding); }

.section-subtitle {
  color: var(--pumpkin);
  font-size: var(--fs-3);
  margin-block-end: 5px;
}

.h1,
.h2,
.h3 { font-family: var(--ff-roboto); }

.h1,
.h2 { font-size: var(--fs-1); }

.h2,
.h3 { color: var(--eerie-black); }

.h3 { font-size: var(--fs-2); }

.section-text,
.card-text {
  font-size: var(--fs-4);
  line-height: 1.8;
}

.btn-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.btn-item-link {
  overflow: hidden;
  border-radius: var(--radius-10);
}

.btn-item-link .img { width: 136px; }

.w-100 { width: 100%; }

.section-title { margin-block: 10px 20px; }

:is(.features, .blog) :is(.section-subtitle, .section-title) {
  text-align: center;
}

.img-holder {
  aspect-ratio: var(--width) / var(--height);
  background-color: var(--light-gray);
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-2);
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white ;
  padding-block: 15px;
  z-index: 4;
}

.header.active {
  position: fixed;
  transform: translateY(-100%);
  filter: drop-shadow(var(--shadow-1));
  animation: slideIn 0.5s ease forwards;
}

@keyframes slideIn {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
}

.header > .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: var(--dark-purple);
  font-family: var(--ff-roboto);
  font-size: 35px;
  font-weight: var(--fw-900);
}

.nav-toggle-btn {
  background-color: var(--pumpkin);
  color: var(--white);
  font-size: 35px;
  padding: 2px 8px;
}

.navbar {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--white);
  padding-inline: 15px;
  overflow: hidden;
  max-height: 0;
  visibility: hidden;
  transition: 0.25s var(--cubic-out);
}

.navbar.active {
  max-height: 340px;
  visibility: visible;
  transition-duration: 0.5s;
}

.navbar-list {
  background-color: var(--cultured-1);
  margin-block-end: 15px;
  padding: 20px 30px;
}

.navbar-link {
  color: var(--eerie-black);
  font-size: var(--fs-3);
  font-weight: var(--fw-600);
  padding-block: 7px;
  transition: var(--transition-1);
}

.navbar-link:is(:hover, :focus, .active) { color: var(--pumpkin); }

.navbar .btn { margin-block: 8px; }





.hero {
  background-color: var(--russian-violet);
  color: var(--white);
  padding-block-start: calc(var(--section-padding) + 70px);
}

.hero-content { margin-block-end: 20px; }

.hero-title { margin-block: 15px 20px; }

.hero .section-text { margin-block-end: 30px; }







.features .section-title { margin-block-end: 30px; }

.features-list {
  display: grid;
  gap: 10px;
}

.features-item {
  position: relative;
  transition: var(--transition-2);
}

.features-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 40%;
  background-color: var(--cultured-2);
  border-radius: var(--radius-10);
  z-index: -1;
}

.features-item:hover { transform: translateY(-10px); }

.features-card {
  background-color: var(--white);
  box-shadow: var(--shadow-2);
  margin: 20px;
  padding: 20px;
  border-radius: var(--radius-10);
  text-align: center;
}

.features-card .card-icon {
  color: var(--pumpkin);
  font-size: 35px;
  max-width: max-content;
  margin-inline: auto;
}

.features-card .card-icon ion-icon { --ionicon-stroke-width: 35px; }

.features-card .card-title { margin-block: 18px 15px; }





.about { background-color: var(--cultured-3); }

.about .about-banner { margin-block-end: 20px; }

.about .section-text,
.about-item:not(:last-child) { margin-block-end: 25px; }

.about-list { margin-block-end: 35px; }

.about-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.about-item .item-icon {
  background-color: var(--pumpkin);
  color: var(--white);
  font-size: 20px;
  padding: 12px;
  border-radius: 50%;
}

.about-item .item-title { margin-block-end: 10px; }



.about-2 .section-text:last-of-type { margin-block: 30px; }

.about-2 .about-content { margin-block-end: 30px; }






.app {
  background-color: var(--russian-violet);
  color: var(--white);
}

.app-banner { margin-block-end: 30px; }

.app .section-title { color: var(--white); }

.app .section-text { margin-block-end: 30px; }






.blog .section-title { margin-block-end: 30px; }

.blog-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.blog-list > li { max-width: 100%; }

.blog-card {
  padding: 15px;
  border-radius: var(--radius-10);
  box-shadow: var(--shadow-2);
}

.blog-card .card-banner {
  border-radius: var(--radius-10);
  overflow: hidden;
}

.blog-card:is(:hover, :focus-within) .img-cover { transform: scale(1.2); }

.blog-card .card-content {
  padding: 15px;
  padding-block-start: 25px;
}

.blog-card :is(.card-meta-list, .card-meta-item) {
  display: flex;
  align-items: center;
}

.blog-card .card-meta-list {
  gap: 15px;
  margin-block-end: 15px;
}

.blog-card .card-meta-item { gap: 6px; }

.blog-card .card-meta-item ion-icon {
  color: var(--pumpkin);
  font-size: var(--fs-5);
}

.blog-card .card-meta-text { font-size: var(--fs-5); }

.blog-card .h3 { margin-block-end: 15px; }

.blog-card .card-title { transition: var(--transition-1); }

.blog-card .card-title:is(:hover, :focus) { color: var(--pumpkin); }


.footer { 
background-color: ; 
}

.footer-top .container {
  display: grid;
  gap: 30px;
}

.footer-top .section-text { margin-block: 15px 22px; }

.social-list {
  display: flex;
  gap: 15px;
}

.social-link {
  background-color: var(--white);
  padding: 12px;
  border-radius: 50%;
  transition: var(--transition-1);
}

.social-link:is(:hover, :focus) {
  background-color: var(--pumpkin);
  color: var(--white);
  transform: translateY(-2px);
}

.footer-list-title {
  color: var(--eerie-black);
  font-family: var(--ff-roboto);
  font-size: var(--fs-2);
  font-weight: var(--fw-700);
  margin-block-end: 20px;
}

.footer-link {
  font-size: var(--fs-4);
  margin-block-start: 10px;
  transition: var(--transition-1);
}

.footer-link:is(:hover, :focus),
.footer-item .item-link:not(.address):is(:hover, :focus) {
  color: var(--pumpkin);
}

.footer-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-block-start: 10px;
}

.footer-item ion-icon {
  flex-shrink: 0;
  color: var(--pumpkin);
  font-size: 17px;
  margin-block-start: 2px;
}

.footer-item .item-link {
  font-size: var(--fs-4);
  transition: var(--transition-1);
}

.footer-bottom {
  padding-block: 20px;
  border-block-start: 1px solid var(--gainsboro);
}

.copyright {
  font-size: var(--fs-4);
  text-align: center;
}

.copyright-link {
  color: var(--pumpkin);
  display: inline-block;
}





.back-top-btn {
  position: fixed;
  bottom: 30px;
  right: -36px;
  background-color: var(--pumpkin);
  color: var(--white);
  padding: 10px;
  border-radius: 50%;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition-1);
}

.back-top-btn.active {
  opacity: 1;
  visibility: visible;
  transform: translateX(-51px);
}









/**
 * responsive for larger than 575px screen
 */

@media (min-width: 575px) {

  /**
   * REUSED STYLE
   */

  .container {
    max-width: 540px;
    width: 100%;
    margin-inline: auto;
  }



  /**
   * FEATURES
   */

  .features-list {
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }



  /**
   * APP
   */

  .app-banner { max-width: max-content; }



  /**
   * FOOTER
   */

  .footer-top .container { grid-template-columns: 1fr 1fr; }

}





/**
 * responsive for larger than 768px screen
 */

@media (min-width: 768px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-1: 4.5rem;

  }



  /**
   * REUSED STYLE
   */
  
  .container { max-width: 720px; }

  .h2 { --fs-1: 3.5rem; }

  .btn {
    font-size: unset;
    padding: 15px 30px;
  }

  .btn-list { gap: 20px; }

  .btn-item-link .img { width: 150px; }



  /**
   * HEADER
   */

  .navbar .btn {
    font-size: var(--fs-4);
    padding: 10px 20px;
  }



  /**
   * BLOG
   */

  .blog-list { gap: 20px; }

  .blog-list > li { max-width: calc(50% - 10px); }

}





/**
 * responsive for larger than 992px screen
 */

@media (min-width: 992px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * spacing
     */

    --section-padding: 100px;

  }



  /**
   * REUSED STYLE
   */

  .container { max-width: 960px; }

  .btn-item-link .img { width: 185px; }



  /**
   * HEADER
   */

  .nav-toggle-btn { display: none; }

  .navbar,
  .navbar.active,
  .navbar-list { all: unset; }

  .navbar-list {
    display: flex;
    align-items: center;
    gap: 30px;
  }



  /**
   * HERO
   */

  .hero .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .hero-content { margin-block-end: 0; }



  /**
   * FEATURES
   */

  .features .section-title { margin-block-end: 40px; }

  .features-list { grid-template-columns: repeat(4, 1fr); }



  /**
   * ABOUT, ABOUT 2, APP
   */

  :is(.about, .about-2, .app) .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 60px;
  }

  .about-banner,
  .app-banner { margin-block-end: 0; }



  /**
   * APP
   */

  .app {
    padding-block: 0;
    margin-block-end: 60px;
  }

  .app-content { padding-block: var(--section-padding); }

  .app-banner { transform: translateY(100px); }



  /**
   * BLOG
   */

  .blog-list > li { max-width: calc(33.33% - 13.33px); }



  /**
   * FOOTER
   */

  .footer-top .container {
    grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr;
    gap: 50px;
  }

}





/**
 * responsive for larger than 1200px screen
 */

@media (min-width: 1200px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-1: 5rem;

  }



  /**
   * REUSED STYLE
   */

  .container { max-width: 1180px; }

  .section-text { --fs-4: 1.5rem; }

  .h2 { --fs-1: 4rem; }

  .h3 { --fs-2: 2.2rem; }



  /**
   * HEADER
   */

  .header { padding-block: 20px; }

  :is(.header, .hero) .container {
    max-width: unset;
    padding-inline: 25px;
  }

  .header .btn {
    font-size: var(--fs-3);
    padding: 14px 30px;
    border-radius: var(--radius-6);
    margin-block: 0;
  }



  /**
   * HERO
   */

  .hero { --section-padding: 30px; }



  /**
   * FEATURES
   */

  .features-list { gap: 25px; }

  .features-card { padding: 30px; }



  /**
   * BLOG
   */

  .blog-list { gap: 25px; }

  .blog-list > li { max-width: calc(33.33% - 16.66px); }



  /**
   * FOOTER
   */

  .footer-list-title { --fs-2: 2.2rem; }

  .social-link {
    font-size: 18px;
    padding: 14px;
  }

  .footer-link,
  .copyright { --fs-4: 1.5rem; }



  /**
   * BACK TO TOP
   */

  .back-top-btn {
    font-size: 24px;
    padding: 13px;
    bottom: 40px;
  }

  .back-top-btn.active { transform: translateX(-80px); }

}
      `,
      jsContent: `
'use strict';





const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}




const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);




const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
      `,
    },
    {
      id: 5,
      name: 'Plantilla de Administrador',
      subtheme: 'Administrador',
      imageUrl:'/images/template5/template.png',
      description: 'Una landing page para que los ususarios administren sus marcadores.',
      htmlContent: `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Responsive Landing Page Website Design</title>
    <link rel="stylesheet" href="css/style.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>

<body>
    <!-- navbar sections starts  -->
    <header class="header">
        <div class="logo">
            <img src="../images/template5/logo-bookmark.svg" alt="logo-bookmark">
        </div>

        <nav class="navbar">
            <a href="#home">Inicio</a>
            <a href="#features">Elementos</a>
            <a href="#download">Descargar</a>
            <a href="#footer">Contacto</a>
            <a href="#" class="btn">Entrar</a>
        </nav>


        <div class="fas fa-bars" id="menu-btn"></div>
    </header>
    <!-- navbar sections starts  -->

   
    <!-- home section stars  -->

    <section class="home" id="home">
        <div class="content">
            <h1>Administrador de marcadores simple</h1>
            <p>Una interfaz limpia y sencilla para organizar sus sitios web favoritos. Abra una pestaña del navegador y vea cómo sus sitios se cargan al instante. ¡¡Pruébalo gratis!!</p>

            <a href="#" class="home-btn">Consíguelo en Chrome</a>
        </div>


        <div class="image">
            <img src="../images/template5/illustration-hero.svg" alt="illustration-hero">
        </div>
    </section>

    <!-- home section ends -->

    <!-- features sectin starts  -->

    <section class="features" id="features">
        <div class="heading">
            <h1>ELEMENTOS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis et quasi aut facere vitae vero. Inventore, minus ab voluptate modi repellat, pariatur tempora quisquam, debitis facilis explicabo voluptatem. A.</p>
        </div>


        <div class="row">
            <!-- 1 Tab  -->
            <div class="image">
                <img src="../images/template5/illustration-features-tab-1.svg" alt="illustration-features-tab-1">
            </div>


            <div class="content">
                <h1>En un solo clic</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis et quasi aut facere vitae vero.</p>
                <a href="#" class="all-btn">Ver más</a>
            </div>

            <!-- 1 Tab  -->

            <!-- 2 Tab  -->
            <div class="content">
                <h1>Busqueda inteligente</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis et quasi aut facere vitae vero. </p>
                <a href="#" class="all-btn">Ver más</a>
            </div>

            <div class="image">
                <img src="../images/template5/illustration-features-tab-2.svg" alt="illustration-features-tab-2">
            </div>

            <!-- 2 Tab  -->

            <div class="image">
                <img src="../images/template5/illustration-features-tab-3.svg" alt="illustration-features-tab-3">
            </div>

            <div class="content">
                <h1>Comparte tus guardados</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis et quasi aut facere vitae vero.</p>
                <a href="#" class="all-btn">Ver más</a>
            </div>


            <!-- 3 Tab  -->

        </div>
    </section>


    <!-- features sectin ends -->


    <!-- downloads section starts  -->

    <section class="download" id="download">
        <div class="heading">
            <h1>DESCARGA LA EXTENSIÓN</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis et quasi aut facere vitae vero.</p>
        </div>

        <div class="box-container">
            <div class="box">
                <img src="../images/template5/logo-chrome.svg" alt="logo-chrome">

                <h3>Agregar a Chrome</h3>
                <p>Minimo Versión 63</p>
                <a href="#" class="all-btn">instalar</a>
            </div>

            <div class="box">
                <img src="../images/template5/logo-firefox.svg" alt="logo-firefox">

                <h3>Agregar a Firefox</h3>
                <p>Minimo Versión 55</p>
                <a href="#" class="all-btn">instalar</a>
            </div>

            <div class="box">
                <img src="../images/template5/logo-opera.svg" alt="logo-opera">

                <h3>Agregar a Opera</h3>
                <p>Minimo Version 46</p>
                <a href="#" class="all-btn">instalar</a>
            </div>
        </div>
    </section>


    <!-- downloads section ends -->



    <!-- footer section starts  -->

   <section class="footer" id="footer">
       <div class="box-container">
           <div class="box">
               <h3>Links</h3>
               <a href="#"><i class="fas fa-chevron-right"></i>Inicio</a>
               <a href="#"><i class="fas fa-chevron-right"></i>Elementos</a>
               <a href="#"><i class="fas fa-chevron-right"></i>Descargar</a>
               <a href="#"><i class="fas fa-chevron-right"></i>Contacto</a>
            </div>
            
            
            <div class="box">
                <h3>our services</h3>
                <a href="#"><i class="fas fa-chevron-right"></i>bookmark extensión</a>
                <a href="#"><i class="fas fa-chevron-right"></i>chrome temas</a>
                <a href="#"><i class="fas fa-chevron-right"></i>firefox temas</a>
                <a href="#"><i class="fas fa-chevron-right"></i>Captura video extensión</a>
                <a href="#"><i class="fas fa-chevron-right"></i>Captura imágen extensión</a>
           </div>

           <div class="box">
               <h3>contact info</h3>
               <a href="#"><i class="fas fa-phone"></i>+123-456-789</a>
               <a href="#"><i class="fas fa-phone"></i>+111-222-3333</a>
               <a href="#"><i class="fas fa-envelope"></i>company@ejemplo.com</a>
               <a href="#"><i class="fas fa-envelope"></i>company@ejemplo.com</a>
               <a href="#"><i class="fas fa-map-marker-alt"></i>CDMX, mex - 12345</a>
           </div>

           <div class="box">
               <h3>follow us</h3>
               <a href="#"><i class="fab fa-facebook-f"></i>facebook</a>
               <a href="#"><i class="fab fa-twitter"></i>facebook</a>
               <a href="#"><i class="fab fa-instagram"></i>instagram</a>
               <a href="#"><i class="fab fa-linkedin"></i>linkedin</a>
               <a href="#"><i class="fab fa-pinterest"></i>pinterest</a>
           </div>
       </div>


       <div class="credit">
       Todos los derechos reservados 'Pranav Raj'. © 2024. 
       </div>
   </section>

    <!-- footer section ends -->
</body>

</html>
      `,
      cssContent: `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap');

*{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-transform: capitalize;
    transition: 0.2s ease-in-out;
    color: #000;
    text-decoration: none;
}


::selection{
    background-color: var(--Soft-Red);
    color: #fff;
}


::-webkit-scrollbar{
    width: 12px;
}

::-webkit-scrollbar-thumb{
    background-color: var(--Soft-Blue);
}

section {
    padding: 2rem 9%;
}

html{
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

.heading{
    text-align: center;
    font-size: 2rem;
    color: var(--Very-Dark-Blue);
    margin-top: 10rem;
    margin-bottom: 5rem;
}


.heading h1{
    padding-bottom: 2rem;
    color: var(--Very-Dark-Blue); 
}


.heading p{
    max-width: 60rem;
    margin: auto;
    color: var(--Grayish-Blue);
    font-size: 1.7rem;
}


.all-btn{
    padding: 1rem 3rem;
    font-size: 1.5rem;
    background-color: var(--Soft-Blue);
    border-radius: .5rem;
    color: #fff;
}

.all-btn:hover{
    background-color: transparent;
    color: var(--Soft-Blue);
    border: 2px solid var(--Soft-Blue);
}


:root{
    --Soft-Blue: hsl(231, 69%, 60%);
    --Soft-Red: hsl(0, 94%, 66%);
    --Grayish-Blue: hsl(229, 8%, 60%);
    --Very-Dark-Blue: hsl(229, 31%, 21%);
    --box-shadow: .5rem .5rem  0 hsl(231, 69%, 60%);
    --text-shadow: .4rem .4rem  0 rgba(0, 0, 0, .2);
    --border: .2rem  solid var(--green);
}


/* navbar sections starts */
.header{
    padding: 3rem 9%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0%;
    left: 0;
    z-index: 10000;
    background-color: #fff;
    box-shadow: 0rem 0.5rem 1.5rem rgba(0, 0, 0, .1);
}


.header .logo{
    cursor: pointer;
}


.header .navbar a{
    margin-left: 2rem;
    font-size: 1.7rem;
    text-transform: uppercase;
}


.header .navbar a:hover{
    color: var(--Soft-Red);
}


.header .navbar .btn{
    padding: .6rem 3rem;
    background-color: var(--Soft-Red);
    color: #fff;
    border-radius: .5rem;
}

.header .navbar .btn:hover{
    color: var(--Soft-Red);
    background-color: transparent;
    border: 2px solid var(--Soft-Red);
}

#menu-btn{
    padding: 1rem 1rem;
    background-color: #eee;
    font-size: 3rem;
    color: var(--Soft-Blue);
    border-radius: .5rem;
    cursor: pointer;
    display: none;
}



/* Media Queries */




@media (max-width: 991px){
    html{
        font-size: 55%;
    }
    .header{
        padding: 2rem;
    }
    
}

@media (max-width: 768px){
    #menu-btn{
        display: initial;
    }

    .header .navbar{
        position: absolute;
        top: 115%;
        right: 2rem;
        box-shadow: var(--box-shadow);
        width: 33rem;
        border-radius: .5rem;
        border: 2px solid var(--Soft-Blue);
        background-color: #fff;
        transform: scale(0);
        transform-origin: top right;
    }

    .header .navbar.active{
        transform: scale(1);
    }

    .header .navbar a{
        margin: 2.5rem;
        text-align: center;
        display: block;
        font-size: 2rem;
    }
}


@media (max-width: 450px){
    html{
        font-size: 50%;
    }
}
/* navbar sections ends */


/* home section starts  */

.home{
    padding-top: 15rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    /* main property for responsiveness */
    gap: 1.5rem;
}


.home .image{
    flex: 1 1 45rem;
}


.home .image img{
    width: 100%;
    margin-top: 5rem;
}


.home .content{
    flex: 1 1 45rem;
}


.home .content h1{
    font-size: 4.5rem;
    padding-block-end: 1rem 0;
    color: var(--Very-Dark-Blue);
}

.home .content p{
    font-size: 1.7rem;
    padding: 1rem 0;
    max-width: 40rem;
    color: var(--Grayish-Blue);
    padding-bottom: 4rem;
}

.home .content .home-btn{
    padding: 1.3rem 2rem;
    background-color: #fff;
    color: #000;
    font-size: 1.4rem;
    box-shadow: .5rem .5rem hsl(231, 69%, 60%);
    border: 2px solid var(--Soft-Blue);
    border-radius: .5rem;
}


.home .content .home-btn:hover{
    background-color: var(--Soft-Blue);
    box-shadow: none;
    color: #fff;
}




/* home section ends */



/* features section starts  */

.features .row{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5rem;
    margin: 3rem 0;
}

.features .row .image{
    flex: 1 1 45rem;
}


.features .row .image img{
    width: 100%;
}



.features .row .content{
    flex: 1 1 45rem;
}


.features .row .content h1{
    font-size: 4rem;
    padding: 1rem 0;
    color: var(--Very-Dark-Blue);
}


.features .row .content p{
    font-size: 1.7rem;
    padding: 1rem 0;
    color: var(--Grayish-Blue);
    padding-bottom: 4rem;
}
/* features section ends */


/* downloads section starts  */

.download .box-container{
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.download .box{
    border: 2px solid var(--Soft-Blue);
    box-shadow: var(--box-shadow);
    border-radius: .5rem;
    text-align: center;
    padding: 2.5rem;
}
.download .box:hover{
    border: 2px solid var(--Soft-Blue);
    box-shadow: none;
}


.download .box h3{
    font-size: 2rem;
    padding: 1rem 0;
    color: var(--Very-Dark-Blue);
}



.download .box p{
    font-size: 1.7rem;
    padding-bottom: 2.5rem;
    color: var(--Grayish-Blue);
}

/* downloads section ends */



/* footer section starts */
.footer .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    gap:2rem;
}

.footer .box-container .box h3{
    font-size: 2.5rem;
    color:var(--black);
    padding: 1rem 0;
}

.footer .box-container .box a{
    display: block;
    font-size: 1.5rem;
    color:var(--light-color);
    padding: 1rem 0;
}

.footer .box-container .box a i{
    padding-right: .5rem;
    color:var(--green);
}

.footer .box-container .box a:hover i{
    padding-right:1rem;
}


.footer .credit{
    padding: 1rem;
    padding-top: 2rem;
    margin-top: 2rem;
    text-align: center;
    font-size: 2rem;
    color: #000;
    border-top: .1rem solid rgba(0, 0, 0, .1);
}


.footer .credit span{
    color: var(--Soft-Red);
    cursor: pointer;
}


/* footer section ends */
      `,
      jsContent: `
let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")


menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}


window.onscroll = () =>{
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}
      `,
    },
    {
      id: 6,
      name: 'Plantilla de Agencia digital',
      subtheme: 'Agencia',
      imageUrl:'/images/template6/template.png',
      description: 'Una landing page para agencias digitales suban su contenido.',
      htmlContent: `
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Adex</title>
  <meta name="title" content="Adex">
  <meta name="description" content="This is a business agency html template made by codewithsadee">

  <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap" rel="stylesheet">



  <link rel="preload" as="image" href="./assets/images/hero-bg.jpg">
  <link rel="preload" as="image" href="./assets/images/hero-slide-1.jpg">
  <link rel="preload" as="image" href="./assets/images/hero-slide-2.jpg">
  <link rel="preload" as="image" href="./assets/images/hero-slide-3.jpg">

</head>

<body>

  <!-- 
    - #HEADER
  -->

  <header class="header" data-header>
    <div class="container">

      <a href="#" class="logo">
        <img src="../images/template6/logo-light.svg" width="74" height="24" alt="Adex home" class="logo-light">

        <img src="../images/template6/logo-dark.svg" width="74" height="24" alt="Adex home" class="logo-dark">
      </a>

      <nav class="navbar" data-navbar>

        <div class="navbar-top">
          <a href="#" class="logo">
            <img src="../images/template6/logo-light.svg" width="74" height="24" alt="Adex home">
          </a>

          <button class="nav-close-btn" aria-label="close menu" data-nav-toggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <ul class="navbar-list">

          <li>
            <a href="#" class="navbar-link">Inicio</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Sobre Nosotros</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Proyectos</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Blogs</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Contacto</a>
          </li>

        </ul>

        <div class="wrapper">
          <a href="mailto:info@email.com" class="contact-link">info@email.com</a>

          <a href="tel:001234567890" class="contact-link">00 (123) 456 78 90</a>
        </div>

        <ul class="social-list">

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-dribbble"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </li>

        </ul>

      </nav>

      <a href="#" class="btn btn-primary">Entrar</a>

      <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
        <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
      </button>

      <div class="overlay" data-nav-toggler data-overlay></div>

    </div>
  </header>





  <main>
    <article>

      <!-- 
        - #HERO
      -->

      <section class="section hero has-bg-image" aria-label="home"
        style="background: #372B70">
        <div class="container">

          <div class="hero-content">

            <h1 class="h1 hero-title">Crea tus proyectos con suliciones especificas.</h1>

            <p class="hero-text">
             Nosotros somos una compañia que esta enfocada en establecer terminos largos de relaciones.
            </p>

            <div class="btn-wrapper">

              <a href="#" class="btn btn-primary">Explorar</a>

              <a href="#" class="btn btn-outline">Contacto</a>

            </div>

          </div>

          <div class="hero-slider" data-slider>

            <div class="slider-inner">
              <ul class="slider-container" data-slider-container>

                <li class="slider-item">

                  <figure class="img-holder" style="--width: 575; --height: 550;">
                    <img src="../images/template6/hero-slide-1.jpg" width="575" height="550" alt="" class="img-cover">
                  </figure>

                </li>
            </div>

            <button class="slider-btn prev" aria-label="slide to previous" data-slider-prev>
              <ion-icon name="arrow-back"></ion-icon>
            </button>

            <button class="slider-btn next" aria-label="slide to next" data-slider-next>
              <ion-icon name="arrow-forward"></ion-icon>
            </button>

          </div>

        </div>
      </section>





      <!-- 
        - #SERVICE
      -->

      <section class="section service" aria-labelledby="service-label">
        <div class="container">

          <p class="section-subtitle" id="service-label">What We Do?</p>

          <h2 class="h2 section-title">
            The service we offer is specifically designed to meet your needs.
          </h2>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h4 card-title">24/7 Support</h3>

                <p class="card-text">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras
                  justo.
                </p>

                <a href="#" class="btn-text">
                  <span class="span">Learn More</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="shield-checkmark-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h4 card-title">Secure Payments</h3>

                <p class="card-text">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras
                  justo.
                </p>

                <a href="#" class="btn-text">
                  <span class="span">Learn More</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="cloud-download-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h4 card-title">Daily Updates</h3>

                <p class="card-text">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras
                  justo.
                </p>

                <a href="#" class="btn-text">
                  <span class="span">Learn More</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <ion-icon name="pie-chart-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 class="h4 card-title">Market Research</h3>

                <p class="card-text">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras
                  justo.
                </p>

                <a href="#" class="btn-text">
                  <span class="span">Learn More</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

          </ul>

        </div>
      </section>





      <!-- 
        - #ABOUT
      -->

      <section class="about" aria-labelledby="about-label">
        <div class="container">

          <figure class="about-banner">
            <img src="../images/template6/about-banner.png" width="800" height="580" loading="lazy" alt="about banner"
              class="w-100">
          </figure>

          <div class="about-content">

            <p class="section-subtitle" id="about-label">Why Choose Us?</p>

            <h2 class="h2 section-title">
              We bring solutions to make life easier for our clients.
            </h2>

            <ul>

              <li class="about-item">
                <div class="accordion-card expanded" data-accordion>

                  <h3 class="card-title">
                    <button class="accordion-btn" data-accordion-btn>
                      <ion-icon name="chevron-down-outline" aria-hidden="true" class="down"></ion-icon>

                      <spna class="span h5">Professional Design</spna>
                    </button>
                  </h3>

                  <p class="accordion-content">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                    sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna,
                    vel.
                  </p>

                </div>
              </li>

              <li class="about-item">
                <div class="accordion-card" data-accordion>

                  <h3 class="card-title">
                    <button class="accordion-btn" data-accordion-btn>
                      <ion-icon name="chevron-down-outline" aria-hidden="true" class="down"></ion-icon>

                      <spna class="span h5">Top-Notch Support</spna>
                    </button>
                  </h3>

                  <p class="accordion-content">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                    sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna,
                    vel.
                  </p>

                </div>
              </li>

              <li class="about-item">
                <div class="accordion-card" data-accordion>

                  <h3 class="card-title">
                    <button class="accordion-btn" data-accordion-btn>
                      <ion-icon name="chevron-down-outline" aria-hidden="true" class="down"></ion-icon>

                      <spna class="span h5">Exclusive Assets</spna>
                    </button>
                  </h3>

                  <p class="accordion-content">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                    sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna,
                    vel.
                  </p>

                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>





      <!-- 
        - #FEATURE
      -->

      <section class="section feature" aria-labelledby="feature-label">
        <div class="container">

          <figure class="feature-banner">
            <img src="../images/template6/feature-banner.png" width="800" height="531" loading="lazy" alt="feature banner"
              class="w-100">
          </figure>

          <div class="feature-content">

            <p class="section-subtitle" id="feautre-label">Our Solutions</p>

            <h2 class="h2 section-title">
              We make your spending stress-free for you to have the perfect control.
            </h2>

            <p class="section-text">
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus.
            </p>

            <ul class="feature-list">

              <li>
                <div class="feature-card">

                  <div class="card-icon">
                    <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
                  </div>

                  <span class="span">
                    Aenean quam ornare. Curabitur blandit.
                  </span>

                </div>
              </li>

              <li>
                <div class="feature-card">

                  <div class="card-icon">
                    <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
                  </div>

                  <span class="span">
                    Nullam quis risus eget urna mollis ornare.
                  </span>

                </div>
              </li>

              <li>
                <div class="feature-card">

                  <div class="card-icon">
                    <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
                  </div>

                  <span class="span">
                    Etiam porta euismod malesuada mollis.
                  </span>

                </div>
              </li>

              <li>
                <div class="feature-card">

                  <div class="card-icon">
                    <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
                  </div>

                  <span class="span">
                    Vivamus sagittis lacus vel augue rutrum.
                  </span>

                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>





      <!-- 
        - #STATS
      -->

      <section class="stats" aria-label="our stats">
        <div class="container">

          <ul class="stats-card has-bg-image" style="background-image: url('./assets/images/stats-bg.jpg')">

            <li>
              <p class="card-text">
                <span class="h1">7518</span>

                <spna class="span">Completed Projects</spna>
              </p>
            </li>

            <li>
              <p class="card-text">
                <span class="h1">3472</span>

                <spna class="span">Happy Customers</spna>
              </p>
            </li>

            <li>
              <p class="card-text">
                <span class="h1">2184</span>

                <spna class="span">Expert Employees</spna>
              </p>
            </li>

            <li>
              <p class="card-text">
                <span class="h1">4523</span>

                <spna class="span">Awards Won</spna>
              </p>
            </li>

          </ul>

        </div>
      </section>





      <!-- 
        - #PROJECT
      -->

      <section class="section project" aria-labelledby="project-label">
        <div class="container">

          <p class="section-subtitle" id="project-label">Case Studies</p>

          <h2 class="h2 section-title">
            Check out some of our awesome projects with creative ideas and great design.
          </h2>

          <ul class="grid-list">

            <li>
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 560; --height: 350;">
                  <img src="../images/template6/blog-1.jpg" width="560" height="350" loading="lazy"
                    alt="Ligula tristique quis risus" class="img-cover">
                </figure>

                <div class="card-content">

                  <h3 class="h3">
                    <a href="#" class="card-title">Ligula tristique quis risus</a>
                  </h3>

                  <p class="card-text">
                    Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras
                    imperdiet nun eu dolor.
                  </p>

                  <ul class="card-meta-list">

                    <li class="card-meta-item">
                      <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                      <time class="meta-text" datetime="2022-04-14">14 Apr 2022</time>
                    </li>

                    <li class="card-meta-item">
                      <ion-icon name="document-text-outline" aria-hidden="true"></ion-icon>

                      <span class="meta-text">Coding</span>
                    </li>

                  </ul>

                </div>

              </div>
            </li>

            <li>
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 560; --height: 350;">
                  <img src="../images/template6/blog-2.jpg" width="560" height="350" loading="lazy"
                    alt="Nullam id dolor elit id nibh" class="img-cover">
                </figure>

                <div class="card-content">

                  <h3 class="h3">
                    <a href="#" class="card-title">Nullam id dolor elit id nibh</a>
                  </h3>

                  <p class="card-text">
                    Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras
                    imperdiet nun eu dolor.
                  </p>

                  <ul class="card-meta-list">

                    <li class="card-meta-item">
                      <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                      <time class="meta-text" datetime="2022-03-29">29 Mar 2022</time>
                    </li>

                    <li class="card-meta-item">
                      <ion-icon name="document-text-outline" aria-hidden="true"></ion-icon>

                      <span class="meta-text">Workspace</span>
                    </li>

                  </ul>

                </div>

              </div>
            </li>

            <li>
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 560; --height: 350;">
                  <img src="../images/template6/blog-3.jpg" width="560" height="350" loading="lazy"
                    alt="Ultricies fusce porta elit" class="img-cover">
                </figure>

                <div class="card-content">

                  <h3 class="h3">
                    <a href="#" class="card-title">Ultricies fusce porta elit</a>
                  </h3>

                  <p class="card-text">
                    Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras
                    imperdiet nun eu dolor.
                  </p>

                  <ul class="card-meta-list">

                    <li class="card-meta-item">
                      <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                      <time class="meta-text" datetime="2022-02-26">26 Feb 2022</time>
                    </li>

                    <li class="card-meta-item">
                      <ion-icon name="document-text-outline" aria-hidden="true"></ion-icon>

                      <span class="meta-text">Meeting</span>
                    </li>

                  </ul>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>





      <!-- 
        - #CTA
      -->

      <section class="cta" aria-label="call to action">
        <div class="container">

          <h2 class="h2 section-title">
            Join our community by using our services and grow your business.
          </h2>

          <a href="#" class="btn btn-primary">Try it For Free</a>

        </div>
      </section>

    </article>
  </main>





  <!-- 
    - #FOOTER
  -->

  <footer class="footer">
    <div class="container grid-list">

      <div class="footer-brand">

        <a href="#" class="logo">
          <img src="../images/template6/logo-light.svg" width="74" height="24" alt="Adex home">
        </a>

        <p class="footer-text">
          &copy; 2022 codewithsadee. <br> All rights reserved.
        </p>

        <ul class="social-list">

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-dribbble"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </li>

        </ul>

      </div>

      <ul class="footer-list">

        <li>
          <p class="h4 footer-list-title">Get in Touch</p>
        </li>

        <li>
          <address class="footer-text">
            Moonshine St. 14/05 Light City, London, United Kingdom
          </address>
        </li>

        <li>
          <a href="mailto:info@email.com" class="footer-link">info@email.com</a>
        </li>

        <li>
          <a href="tel:001234567890" class="footer-link">00 (123) 456 78 90</a>
        </li>

      </ul>

      <ul class="footer-list">

        <li>
          <p class="h4 footer-list-title">Learn More</p>
        </li>

        <li>
          <a href="#" class="footer-link">About Us</a>
        </li>

        <li>
          <a href="#" class="footer-link">Our Story</a>
        </li>

        <li>
          <a href="#" class="footer-link">Projects</a>
        </li>

        <li>
          <a href="#" class="footer-link">Terms of Use</a>
        </li>

        <li>
          <a href="#" class="footer-link">Privacy Policy</a>
        </li>

      </ul>

      <div class="footer-list">

        <p class="h4 footer-list-title">Our Newsletter</p>

        <p class="footer-text">
          Subscribe to our newsletter to get our news & deals delivered to you.
        </p>

        <form action="" class="input-wrapper">
          <input type="email" name="email_address" placeholder="Email Address" required class="input-field">

          <button type="submit" class="submit-btn">Join</button>
        </form>

      </div>

    </div>
  </footer>


  <!-- 
    - ionicon
  -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</body>

</html>
      `,
      cssContent: `


/**
 * copyright 2022 codewithsadee
 */



:root {

  /**
   * colors
   */

  --violet-blue-crayola: hsla(234, 50%, 64%, 1);
  --dark-cornflower-blue_a7: hsla(214, 88%, 27%, 0.07);
  --white: hsla(0, 0%, 100%, 1);
  --white_a3: hsla(0, 0%, 100%, 0.03);
  --white_a8: hsla(0, 0%, 100%, 0.08);
  --white_a12: hsla(0, 0%, 100%, 0.12);
  --white_a70: hsla(0, 0%, 100%, 0.7);
  --cultured: hsla(220, 20%, 97%, 1);
  --lavender-web: hsla(233, 52%, 94%, 1);
  --cadet-blue-crayola: hsla(220, 12%, 70%, 1);
  --cadet-blue-crayola_a20: hsla(222, 23%, 71%, 0.2);
  --charcoal: hsla(218, 22%, 26%, 1);
  --raisin-black: hsla(216, 14%, 14%, 1);
  --light-gray: hsla(0, 0%, 79%, 1);
  --blue-crayola: hsla(219, 72%, 56%, 1);
  --black-coral: hsla(220, 12%, 43%, 1);

  /**
   * typography
   */

  --ff-manrope: 'Manrope', sans-serif;

  --fs-1: calc(2.7rem + 1.38vw);
  --fs-2: calc(2.6rem + .66vw);
  --fs-3: 2.2rem;
  --fs-4: 1.9rem;
  --fs-5: 1.8rem;
  --fs-6: 1.7rem;
  --fs-7: 1.5rem;
  --fs-8: 1.4rem;
  
  --fw-700: 700;

  /** 
   * spacing
   */

  --section-padding: 90px;

  /**
   * box shadow
   */

  --shadow-1: 0 0 20px hsla(216, 14%, 14%, 0.05);
  --shadow-2: 0 0 0 0.05rem hsla(214, 88%, 27%, 0.08), 0 0 1.25rem hsla(216, 14%, 14%, 0.06);
  --shadow-3: 0 0 1.25rem hsla(216, 14%, 14%, 0.04);

  /**
   * border radius
   */

  --radius-circle: 50%;
  --radius-pill: 100px;
  --radius-10: 10px;
  --radius-8: 8px;
  --radius-6: 6px;

  /**
   * transition
   */

  --transition-1: 0.25s ease;
  --transition-2: 0.5s ease;
  --transition-3: 0.3s ease-in-out;

}



*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li { list-style: none; }

a,
img,
span,
input,
button,
ion-icon { display: block; }

a {
  color: inherit;
  text-decoration: none;
}

img { height: auto; }

input,
button {
  background: none;
  border: none;
  font: inherit;
}

input { width: 100%; }

button { cursor: pointer; }

ion-icon { pointer-events: none; }

address { font-style: normal; }

html {
  font-family: var(--ff-manrope);
  font-size: 10px;
  scroll-behavior: smooth;
}

body {
  background-color: var(--white);
  color: var(--black-coral);
  font-size: 1.6rem;
  line-height: 1.7;
}

body.nav-active { overflow: hidden; }

::-webkit-scrollbar { width: 10px; }

::-webkit-scrollbar-track { background-color: hsl(0, 0%, 98%); }

::-webkit-scrollbar-thumb { background-color: hsl(0, 0%, 80%); }

::-webkit-scrollbar-thumb:hover { background-color: hsl(0, 0%, 70%); }




.container { padding-inline: 16px; }

.social-list {
  display: flex;
  align-items: center;
  gap: 12px;
}

.social-link {
  font-size: 2rem;
  transition: var(--transition-1);
}

.social-link:is(:hover, :focus-visible) { transform: translateY(-3px); }

.section { padding-block: var(--section-padding); }

.has-bg-image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.h1,
.h2,
.h3,
.h4,
.h5 {
  color: var(--charcoal);
  font-weight: var(--fw-700);
  line-height: 1.3;
}

.h1 { font-size: var(--fs-1); }

.h2 { font-size: var(--fs-2); }

.h3 { font-size: var(--fs-3); }

.h4 { font-size: var(--fs-4); }

.h5 { font-size: var(--fs-6); }

.btn {
  color: var(--white);
  font-size: var(--fs-6);
  font-weight: var(--fw-700);
  border: 2px solid var(--white);
  max-width: max-content;
  padding: 12px 28px;
  border-radius: var(--radius-pill);
  transition: var(--transition-1);
  will-change: transform;
}

.btn:is(:hover, :focus-visible) { transform: translateY(-4px); }

.btn-primary,
.btn-outline:is(:hover, :focus-visible) {
  background-color: var(--white);
  color: var(--charcoal);
}

.img-holder {
  aspect-ratio: var(--width) / var(--height);
  background-color: var(--light-gray);
  overflow: hidden;
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section-subtitle {
  font-size: var(--fs-7);
  text-transform: uppercase;
  color: var(--violet-blue-crayola);
  font-weight: var(--fw-700);
  margin-block-end: 16px;
}

.grid-list {
  display: grid;
  gap: 25px;
}

.w-100 { width: 100%; }



.header .btn { display: none; }

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-block: 20px;
  box-shadow: var(--shadow-1);
  z-index: 4;
}

.header.active {
  background-color: var(--white);
  position: fixed;
  animation: slideIn 0.5s ease forwards;
}

@keyframes slideIn {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.header.active .logo-light,
.header .logo-dark { display: none; }

.header .logo-light,
.header.active .logo-dark { display: block; }

.nav-open-btn {
  font-size: 3.5rem;
  color: var(--white);
}

.header.active .nav-open-btn { color: var(--charcoal); }

.navbar {
  position: fixed;
  top: 0;
  left: -300px;
  background-color: var(--raisin-black);
  color: var(--white);
  max-width: 300px;
  width: 100%;
  height: 100vh;
  padding: 30px;
  padding-block-end: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  z-index: 2;
  visibility: hidden;
  transition: var(--transition-3);
}

.navbar.active {
  visibility: visible;
  transform: translateX(300px);
}

.navbar-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-close-btn {
  background-color: var(--white_a8);
  color: var(--white);
  font-size: 2rem;
  padding: 6px;
  border-radius: var(--radius-circle);
  transition: var(--transition-1);
}

.nav-close-btn ion-icon { --ionicon-stroke-width: 50px; }

.nav-close-btn:is(:hover, :focus-visible) { background-color: var(--white_a12); }

.navbar-list { margin-block-end: auto; }

.navbar-link {
  font-weight: var(--fw-700);
  padding-block: 6px;
}

.contact-link { transition: var(--transition-1); }

.contact-link:is(:hover, :focus-visible) { color: var(--violet-blue-crayola); }

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--raisin-black);
  pointer-events: none;
  opacity: 0;
  transition: var(--transition-1);
}

.overlay.active {
  pointer-events: all;
  opacity: 0.8;
}





.hero {
  padding-block-start: calc(var(--section-padding) + 70px);
  text-align: center;
}

.hero .container {
  display: grid;
  gap: 70px;
}

.hero-title { color: var(--white); }

.hero-text {
  font-size: var(--fs-5);
  color: var(--white);
  margin-block: 24px 36px;
}

.btn-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.hero-slider,
.hero-card { position: relative; }

.hero-card .play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  color: var(--charcoal);
  font-size: 2rem;
  padding: 25px;
  border-radius: var(--radius-circle);
  transition: var(--transition-1);
  animation: pulse 2s ease infinite;
}

.hero-card .play-btn:is(:hover, :focus-visible) { color: var(--violet-blue-crayola); }

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 var(--white_a70); }
  75% { box-shadow: 0 0 0 20px transparent; }
}

.hero .slider-inner {
  border-radius: var(--radius-10);
  overflow: hidden;
}

.hero .slider-container {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  transition: var(--transition-2);
}

.hero .slider-item {
  min-width: 100%;
  width: 100%;
  border-radius: var(--radius-10);
  overflow: hidden;
}

.hero .slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--white_a70);
  color: var(--charcoal);
  font-size: 2rem;
  padding: 12px;
  border-radius: var(--radius-circle);
  transition: var(--transition-1);
}

.hero .slider-btn:is(:hover, :focus-visible) { background-color: var(--white); }

.hero .slider-btn.prev { left: 20px; }

.hero .slider-btn.next { right: 20px; }




.service { text-align: center; }

.service .section-title { margin-block-end: 50px; }

.service-card {
  padding: 40px;
  box-shadow: var(--shadow-2);
  border-radius: var(--radius-6);
}

.service-card .card-icon {
  width: 60px;
  height: 60px;
  background-color: var(--violet-blue-crayola);
  display: grid;
  place-items: center;
  color: var(--white);
  font-size: 2.5rem;
  border-radius: var(--radius-circle);
  margin-inline: auto;
}

.service-card .card-icon ion-icon { --ionicon-stroke-width: 50px; }

.service-card .card-title { margin-block: 16px 10px; }

.service-card .btn-text {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-block-start: 10px;
  color: var(--violet-blue-crayola);
  font-weight: var(--fw-700);
  transition: var(--transition-1);
}

.service-card .btn-text:is(:hover, :focus-visible) { opacity: 0.9; }




.about .container {
  display: grid;
  gap: 50px;
}

.about .section-title { margin-block-end: 35px; }

.accordion-card .card-title { padding-block-end: 20px; }

.accordion-btn {
  display: flex;
  align-items: center;
  gap: 10px;
}

.accordion-btn ion-icon {
  font-size: 1.5rem;
  color: var(--blue-crayola);
  transition: var(--transition-1);
}

.accordion-card.expanded .accordion-btn ion-icon {
  transform: rotate(0.5turn);
}

.accordion-btn .span { transition: var(--transition-1); }

.accordion-btn:is(:hover, :focus-visible) .span,
.accordion-card.expanded .accordion-btn .span { color: var(--violet-blue-crayola); }

.accordion-content {
  padding-inline-start: 24px;
  max-height: 0;
  overflow: hidden;
}

.accordion-card.expanded .accordion-content {
  max-height: max-content;
  padding-block-end: 20px;
}




.feature .container {
  display: grid;
  gap: 50px;
}

.feature .section-text { margin-block: 25px 30px; }

.feature-list {
  display: grid;
  gap: 15px;
}

.feature-card {
  display: flex;
  align-items: center;
  gap: 10px;
}

.feature-card .card-icon {
  background-color: var(--lavender-web);
  font-size: 1.4rem;
  padding: 4px;
  border-radius: var(--radius-circle);
}

.feature-card .card-icon ion-icon { --ionicon-stroke-width: 40px; }





.stats { background-image: linear-gradient(to bottom, var(--white) 50%, var(--cultured) 50%); }

.stats-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  gap: 36px 24px;
  padding: 45px 30px;
  border-radius: var(--radius-8);
}

.stats-card .card-text > * { color: var(--white); }






.project { background-color: var(--cultured); }

.project :is(.section-subtitle, .section-title) { text-align: center; }

.project .section-title { margin-block-end: 50px; }

.project-card {
  background-color: var(--white);
  border-radius: var(--radius-8);
  overflow: hidden;
  box-shadow: var(--shadow-2);
  height: 100%;
}

.project-card .card-content { padding: 30px; }

.project-card .card-title { transition: var(--transition-1); }

.project-card .card-title:is(:hover, :focus-visible) { color: var(--violet-blue-crayola); }

.project-card .card-text { margin-block: 16px 20px; }

.project-card .card-meta-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.project-card .card-meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--cadet-blue-crayola);
  font-size: var(--fs-8);
}




.cta { background-color: var(--charcoal); }

.cta .container {
  padding-block: 100px 60px;
  border-block-end: 1px solid var(--cadet-blue-crayola_a20);
}

.cta .section-title {
  color: var(--white);
  margin-block-end: 30px;
}

.cta .btn {
  background-color: var(--violet-blue-crayola);
  color: var(--white);
  border: none;
}




.footer {

  padding-block: 60px 100px;

}

.footer-brand .footer-text { margin-block: 20px; }

.footer .social-list { color: var(--white); }

.footer-list-title {
  color: var(--white);
  margin-block-end: 16px;
}

.footer-link {
  padding-block: 4px;
  transition: var(--transition-1);
}

.footer-link:is(:hover, :focus-visible) { color: var(--violet-blue-crayola); }

.input-wrapper {
  position: relative;
  margin-block-start: 25px;
}

.input-field {
  background-color: var(--white_a3);
  color: var(--light-gray);
  font-size: var(--fs-7);
  padding: 12px 16px;
  border: 1px solid var(--dark-cornflower-blue_a7);
  border-radius: var(--radius-6);
  box-shadow: var(--shadow-3);
  outline: none;
}

.input-field::placeholder { color: inherit; }

.submit-btn {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 0 var(--radius-6) var(--radius-6) 0;
  background-color: var(--violet-blue-crayola);
  color: var(--white);
  padding-inline: 24px;
  font-weight: var(--fw-700);
}




/**
 * responsive for large than 575px screen
 */

@media (min-width: 575px) {

  /**
   * REUSED STYLE
   */

  .container {
    max-width: 540px;
    width: 100%;
    margin-inline: auto;
  }



  /**
   * PROJECTS
   */

  .project-card .card-content { padding: 40px; }

}





/**
 * responsive for large than 768px screen
 */

@media (min-width: 768px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * spacing
     */

    --section-padding: 120px;

  }



  /**
   * REUSED STYLE
   */

  .container { max-width: 720px; }

  .grid-list { grid-template-columns: 1fr 1fr; }



  /**
   * HEADER
   */

  .header .btn {
    display: block;
    margin-inline-start: auto;
    padding: 8px 20px;
  }

  .header.active .btn {
    background-color: var(--violet-blue-crayola);
    border-color: var(--violet-blue-crayola);
    color: var(--white);
  }



  /**
   * HERO
   */

  .hero-content {
    max-width: 85%;
    margin-inline: auto;
  }

  .hero-text { --fs-5: 2rem; }



  /**
   * SERVICE
   */

  .service .section-title {
    max-width: 30ch;
    margin-inline: auto;
  }



  /**
   * ABOUT
   */

  .about .container {
    grid-template-columns: 1fr 0.7fr;
    align-items: center;
  }



  /**
   * FEATURE
   */

  .feature .container {
    grid-template-columns: 0.7fr 1fr;
    align-items: center;
  }

  .feature-banner { order: 1; }

}





/**
 * responsive for large than 992px screen
 */

@media (min-width: 992px) {

  /**
   * REUSED STYLE
   */

  .container { max-width: 960px; }



  /**
   * HEADER
   */

  .nav-open-btn,
  .navbar > *:not(.navbar-list),
  .overlay { display: none; }

  .navbar,
  .navbar.active {
    all: unset;
    display: block;
    margin-inline: auto 24px;
  }

  .navbar-list {
    display: flex;
    gap: 30px;
  }

  .navbar-link {
    color: var(--white);
    transition: var(--transition-1);
  }

  .navbar-link:is(:hover, :focus-visible) { opacity: 0.7; }

  .header.active .navbar-link { color: var(--charcoal); }

  .header.active .navbar-link:is(:hover, :focus-visible) {
    opacity: 1;
    color: var(--violet-blue-crayola);
  }

  .header .btn { margin-inline-start: 0; }



  /**
   * HERO
   */

  .hero {
    padding-block-start: calc(var(--section-padding) + 50px);
    text-align: left;
  }

  .hero .container {
    grid-template-columns: 1fr 0.8fr;
    align-items: center;
  }

  .hero-content {
    max-width: unset;
    margin-inline: 0;
  }

  .btn-wrapper { justify-content: flex-start; }



  /**
   * STATS
   */

  .stats-card { grid-template-columns: repeat(4, 1fr); }



  /**
   * PROJECT
   */

  .project .section-title {
    max-width: 32ch;
    margin-inline: auto;
  }



  /**
   * CTA
   */

  .cta .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cta .btn { min-width: max-content; }

  .cta .section-title {
    max-width: 30ch;
    margin-block-end: 0;
  }



  /**
   * FOOTER
   */

  .footer .grid-list { grid-template-columns: repeat(4, 1fr); }

}





/**
 * responsive for large than 1200px screen
 */

@media (min-width: 1200px) {

  /**
   * REUSED STYLE
   */

  .container { max-width: 1140px; }



  /**
   * HERO
   */

  .hero-text { padding-inline-end: 100px; }



  /**
   * SERVICE
   */

  .service .grid-list { grid-template-columns: repeat(4, 1fr); }



  /**
   * STATS
   */

  .stats .container { max-width: 70%; }

  .stats-card { padding: 60px; }



  /**
   * PROJECT
   */

  .project .grid-list { grid-template-columns: repeat(3, 1fr); }



  /**
   * FOOTER
   */

  address.footer-text {
    padding-inline-end: 100px;
    margin-block-end: 16px;
  }

}





/**
 * responsive for large than 1400px screen
 */

@media (min-width: 1400px) {

  /**
   * REUSED STYLE
   */

  .container { max-width: 1320px; }

  

  /**
   * FEATURE
   */

  .feature-list { grid-template-columns: 1fr 1fr; }

}
      `,
      jsContent: `
'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {

  const sldierContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
   
  }

  /**
   * NEXT SLIDE
   */

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */

   const slidePrev = function () {

    if (currentSlidePos <= 0) {
      currentSlidePos = sldierContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }



/**
 * ACCORDION
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);

}

for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }
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
