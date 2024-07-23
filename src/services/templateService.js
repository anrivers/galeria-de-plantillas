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
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <title>Agencia de viajes Landing Page</title>
  </head>
  <body>
    <main class="main__container">
      <header class="header">
        <!-- Logo -->
        <div class="logo">
          <img src="../images/template3/website__logo.png" alt="Website Logo" />
        </div>

        <div class="header__right">
          <!-- Navbar  -->
          <nav class="navbar">
            <ul>
              <li>
                <a href="#product"> Producto </a>
              </li>
              <li>
                <a href="#services"> Servicios </a>
              </li>
              <li>
                <a href="#blog"> Blog </a>
              </li>
              <li>
                <a href="#about-us"> Nosotros </a>
              </li>
              <li>
                <a href="#contact-us"> Contacto </a>
              </li>
            </ul>
          </nav>

          <!-- Login and Sign Up -->
          <button class="login">
            <a href="#login">Entrar </a>
          </button>
        </div>
      </header>

      <!-- Main Section with Text and Image -->
      <section class="main__section">
        <div class="main__left">
          <div>
            <div class="main__left__heading">
              <h2 class="typing__text">Viaja con nosotros</h2>
              <h2 class="typing__text">¡Las mejores aventuras!</h2>
            </div>
            <p class="main__left__desc">
              ¡Contruye tu proximo viaje con nosotros! 
              Descubre mas de tu viaje con nosotros a continuación.
            </p>
            <div class="cta">
              <button class="btn1">
                <a href="#get-started"> Explorar </a>
              </button>
              <button class="btn2">
                <a href="#learn-more"> Leer más </a>
              </button>
            </div>
          </div>
          <div class="main__left__explore">
            <div class="main__left__explore__heading">
              <h3>Explora el lugar de tu sueño</h3>
              <p>Crea un nuevo estandar perzonalizado con nosotros.</p>
            </div>
            <div class="main__left__explore__images">
              <div class="scroll__container">
                <div class="images__wrapper">
                  <div>
                    <img class="" src="../images/template3/europe__monument.png" />
                    <p>Europe</p>
                  </div>
                  <div>
                    <img class="" src="../images/template3/delhi__monument.png" />
                    <p>Delhi</p>
                  </div>
                
                </div>
              </div>
              <button class="btn3">
                <im g class="" src="../images/template3/chevron-right.svg"/>
              </button>
            </div>
          </div>
        </div>

        <div class="main__right">
          <div class="carousel">
            <div class="carousel__item">
              <div class="bg__image1">
                <img src="../images/template3/hero__banner1.png" />
              </div>
            </div>
            <div class="carousel__item">
               <div class="bg__image2">

                 <img src="../images/template3/hero__banner2.png" />
                </div>
            </div>
            <div class="carousel__item">
               <div class="bg__image3">

                 <img src="../images/template3/hero__banner3.png" />
                </div>
            </div>
            <div class="carousel__item">
               <div class="bg__image4">

                 <img src="../images/template3/hero__banner4.png" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- Footer -->
  <footer class="footer">
    <p> Todos los derechos reservados Raiv200. &copy; 2024.</p>
  </footer>
</body>
    <script>
      let slideIndex = 0;
      showSlides();

      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("carousel__item");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); 
      }
    </script>
  </body>
</html>
      `,
      cssContent: `
body {
    margin: 0;
    padding: 0;
    /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
    font-family: 'Poppins', sans-serif;
    background-image: url('/images/template3/bg__image.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.main__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 1300px;
    margin: auto;
    /* border:1px solid black; */
}

.header {
    display: flex;
    align-items: center;
    height: 72px;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    z-index: 100;
    left: 0;
    width: 100%;
    padding: 0;

}

.footer {

  color: #000000B2;
  text-align: center;
  padding: 20px;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;

}

.logo:hover {
    cursor: pointer;
}

.logo>img {
    width: 150px;
    height: 40px;
    margin: 2px;
}

.logo>h2 {
    margin-left: 14px;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header__right {
    display: flex;
    justify-content: space-between;
    width: 775px;
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.navbar>ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: baseline;
}

.navbar>ul>li {
    margin-right: 16px;
    width: 100px;
    text-align: center;
    padding: 2px;
}

.navbar>ul>li>a {
    text-decoration: none;
    color: #000000B2;
    font-size: 14px;
    font-weight: 400;
}

.navbar>ul>li:hover {
    background-color: #2D79EB;
    border-radius: 4px;
    padding: 2px;
    transition: all ease 0.4s;
}

.navbar>ul>li:hover>a {
    font-weight: 600;
    color: #ffffff;
    transition: all ease 0.4s;
}

.login {
      padding: 16px 28px;
    background-color: #2D79EB;
    margin-left: 2rem;
    border-radius: 12px;
    border: none;
    width: 233px;
    height: 100%;
    cursor: pointer;
}

.login>a {
   text-decoration: none;
    font-weight: 600;
    color: #ffffff;
    font-size: 19px;
}

.login:hover {
    background-color: #000000B2;
    transition: all ease 0.4s;
}

.login:hover>a {
    color: #ffffff;
}



.main__section {
    display: flex;
    flex-basis: 1;
    height: 100%;
    width: 1300px;
    margin: auto;
    justify-content: space-between;

}


.main__left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 100%;
    width: 643px;

}

.main__left__heading {
    position: relative;
}

.main__left__heading> h2 {
    font-size: 48px;
    line-height: 64px;
    width: 100%;
    margin: 2px;
    font-weight: 800;
    color: #000000CC;
}

.typing__text{
    font-size: 48px;
    line-height: 64px;
    width: 100%;
    margin: 2px;
    font-weight: 800;
    color: #000000CC;
    overflow: hidden; 
    white-space: nowrap; 
    animation: typing 3.5s steps(40, end),blink-caret .75s step-end infinite;
}

.main__left__heading>h2::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 5px;
    width: 0%;
    background-color: #000000B2;
    transition: all ease 0.5s;
}

.main__left__heading>h2:hover::after {
    width: 100%;
}

.main__left__desc {
    font-size: 16px;
    font-weight: 400;
    width: 576px;
    height: 66px;
    color: #645f5f;
    padding: 10px 10px;

}

.cta {
    width: 480px;
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.btn1 {
      padding: 16px 28px;
    background-color: #2D79EB;
    margin-left: 2rem;
    border-radius: 12px;
    border: none;
    width: 233px;
    height: 100%;
    cursor: pointer;
}

.btn1>a {
        text-decoration: none;
    font-weight: 600;
    color: #ffffff;
    font-size: 19px;
}

.btn1:hover {
        background-color: #2d79eb3e;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    transition: all ease 0.4s;
}

.btn1:hover>a {
    color: #2D79EB
}

.btn2 {
    padding: 16px 28px;
    background-color: #2D79EB;
    margin-left: 2rem;
    border-radius: 12px;
    border: none;
    width: 233px;
    height: 100%;
    cursor: pointer;
}

.btn2:hover {
    background-color: #2d79eb3e;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    transition: all ease 0.4s;
}

.btn2:hover>a {
    color: #2D79EB
}

.btn2>a {
    text-decoration: none;
    font-weight: 600;
    color: #ffffff;
    font-size: 19px;
}

.main__left__explore {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 400px;
    height: 227px;

}

.main__left__explore__heading {
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    width: 298px;
    height: 47px;
}

.main__left__explore__heading>h3 {
    font-size: 16px;
    line-height: 30px;
    width: 100%;
    margin: 2px;
    font-weight: 800;
}

.main__left__explore__heading>p {
    font-size: 10px;
    line-height: 23px;
    width: 100%;
    margin: 2px;
    font-weight: 300;
}

.main__left__explore__images {
    display: flex;
    align-items: center;
    width: 400px;
    height: 150px;

}

.scroll__container {
    display: flex;
    overflow: hidden;
    position: relative;
}

.images__wrapper::after {
    content: '';
    display: block;
    width: 300px;
    height: 150px;
    position: absolute;
    background-image: linear-gradient(to left, #09b9ff);
    right:0;
    top:0;
}

.images__wrapper {
    display: flex;
    animation: scrollImages 10s linear infinite;
    height: 150px;
}



.images__wrapper>div>p {
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    margin: 2px;
    font-weight: 600;
    text-align: center;
}

.images__wrapper>* {
    margin-right: 16px;
}

.btn3 {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2D79EB;
    color: #ffffff;
    border-radius: 4px;
    width: 25px;
    height: 25px;
    border: none;
    margin-left: 20px;
    cursor: pointer;
}

.main__right {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 72px);
    width: 560px;
    position: relative;
}

.carousel {
    display: flex;
    width: 100%;
    height: calc(100vh - 72px);
    overflow: hidden;
    margin: 0 auto;
}

/* Styles for individual carousel items */
.carousel__item {
    flex:0 0 100%;
    transition: transform 2s;
    height: calc(100vh - 72px);
}

.carousel__item >{
 
    width: 100%;
    height: 100%; 
    object-fit: contain;
    
    border: 2px solid blue;
}


.bg__image1 {
    background-image: url('./images/bg__image1.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
   
}
.bg__image1 > img {
    width: 100%;
    height: 100%;
    animation: slideInRight 1s ease-in-out forwards;
    object-fit:contain;
}

.bg__image2 {
    background-image: url('./images/bg__image2.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
   
}
.bg__image2 > img {
    width: 100%;
    height: 100%;
    animation: slideInRight 1s ease-in-out forwards;
    object-fit:contain;
}

.bg__image3 {
    background-image: url('./images/bg__image3.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
   
}
.bg__image3 > img {
    width: 100%;
    height: 100%;
    animation: slideInRight 1s ease-in-out forwards;
    object-fit:contain;
}

.bg__image4  {
    background-image: url('./images/bg__image4.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
}
.bg__image4 > img {
    width: 100%;
    height: 100%;
    animation: slideInRight 1s ease-in-out forwards;
    object-fit:contain;
}


@keyframes scrollImages {
    0% {
        transform: translateX(100%);
        /* Start from the right */
    }

    100% {
        transform: translateX(-100%);
        /* Scroll to the left */
    }
}

/* The Sliding effect */

@keyframes slideInRight {
    0% {
      transform: translateX(30%); 
    }
    100% {
      transform: translateX(0%);
    }
}


/* The typing effect */
@keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: transparent; }
  }

@media only screen and (max-width: 1000px) {

   body {
    height: 100vh;
        width: 380px;
        margin: auto;
   }

    .main__container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        width: 380px;
        margin: auto;
    }

    .header {
        display: flex;
        width: 320px;
        height: 72px;
        padding: 0px;
    }

    .header__right {
        width: 120px;
    }

    .navbar {
        display: none;
    }

    .main__section {
        display: flex;
        flex-direction: column;
        flex-basis: 1;
        height: 100%;
        width: 380px;
        margin: auto;
        margin-top: 40px;
        padding: 10px 40px;
    }

    .main__left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        height: 100%;
        width: 380px;

    }

    .main__left__heading>h2 {
        font-size: 28px;
        line-height: 32px;
    }

    .main__left__desc {
        font-size: 13px;
        font-weight: 400;
        width: 340px;
        height: 66px;
        color: #645f5f;
        padding: 10px 10px;

    }

    .cta {
        width: 340px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .btn1 {
        padding: 2px 10px;
        width: 200px;
    }

    .btn1>a {
        font-size: 16px;
    }

    .btn2 {
        padding: 2px 10px;
        width: 200px;
    }

    .btn2>a {
        font-size: 16px;
    }

    .main__left__explore {
        width: 340px;
        height: 227px;
        margin: 20px 0;
    }

    .main__left__explore__heading>h3 {
        font-size: 20px;
    }

    .main__left__explore__heading>p {
        font-size: 14px;
    }
    .scroll__container {
        margin-top: 20px;
    }
    .main__left__explore__images> button {
        display: none;
    }


    .main__right {
        width: 380px;
        height: 100%;
        padding: 10px;
        
    }

    .main__right__image {
        position: absolute;
        height: 290px;
        width: 380px;
        top:20px;
        
    }
}
      `,
      jsContent: `


// Initial display
showItem(currentIndex);

// Auto-advance the carousel (optional)
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
}, 3000);
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

  <!-- 
    - favicon
  -->
  <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml">

  <!-- 
    - custom css link
  -->
  <link rel="stylesheet" href="./assets/css/style.css">

  <!-- 
    - google font link
  -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@700;900&display=swap"
    rel="stylesheet">
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
    - custom js link
  -->
  <script src="./assets/js/script.js" defer></script>

  <!-- 
    - ionicon link
  -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</body>

</html>
      `,
      cssContent: `
/*-----------------------------------*\
  #style.css
\*-----------------------------------*/

/**
 * copyright 2022 codewithsadee
 */





/*-----------------------------------*\
  #CUSTOM PROPERTY
\*-----------------------------------*/

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





/*-----------------------------------*\
  #RESET
\*-----------------------------------*/

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





/*-----------------------------------*\
  #REUSED STYLE
\*-----------------------------------*/

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





/*-----------------------------------*\
  #HEADER
\*-----------------------------------*/

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--white);
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





/*-----------------------------------*\
  #HERO
\*-----------------------------------*/

.hero {
  background-color: var(--russian-violet);
  color: var(--white);
  padding-block-start: calc(var(--section-padding) + 70px);
}

.hero-content { margin-block-end: 20px; }

.hero-title { margin-block: 15px 20px; }

.hero .section-text { margin-block-end: 30px; }





/*-----------------------------------*\
  #FEATURES
\*-----------------------------------*/

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





/*-----------------------------------*\
  #ABOUT
\*-----------------------------------*/

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





/*-----------------------------------*\
  #ABOUT 2
\*-----------------------------------*/

.about-2 .section-text:last-of-type { margin-block: 30px; }

.about-2 .about-content { margin-block-end: 30px; }





/*-----------------------------------*\
  #APP
\*-----------------------------------*/

.app {
  background-color: var(--russian-violet);
  color: var(--white);
}

.app-banner { margin-block-end: 30px; }

.app .section-title { color: var(--white); }

.app .section-text { margin-block-end: 30px; }





/*-----------------------------------*\
  #BLOG
\*-----------------------------------*/

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





/*-----------------------------------*\
  #FOOTER
\*-----------------------------------*/

.footer { background-color: var(--cultured-3); }

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





/*-----------------------------------*\
  #BACK TO TOP
\*-----------------------------------*/

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







/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

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



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active
 */

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
