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
      imageUrl:'/images/estructura-web.png',
      description: 'Una plantilla para un negocio de comida.',
      htmlContent: `
<!DOCTYPE html>
<html lang="en">
 
<head>
      <title>Homepage for Restaurant</title>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <title>Fooddddie's Kitchen</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet"
          href=
"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity=
"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous">
</head>
 
<body>
 
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark ">
        <a class="navbar-brand" href="#">
          Restaurante Nombre
          </a>
        <button class="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#about">
                      Sobre nosotros
                      </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#reservation">
                      Reservación 
                      </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#menu">
                      Menú
                      </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#shop">
                      Tienda
                      </a>
                </li>
            </ul>
        </div>
    </nav>
 
    <!-- Hero Section -->
    <div class="header">
    <section class="hero-section text-center">
        <div class="container">
            <h1 class="display-4">
              Bienvenido a tu restaurante de comida 
              </h1>
            <p class="lead">
              Aquí podrás encotrar los 
              mejores platillos de comida.
              </p>
            <a class="btn btn-primary btn-lg" href="#reservations">
              Ver más 
              </a>
        </div>
    </section>
     </div>
 
    <!-- About Section -->
    <section id="about" class="about-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h2 class="section-heading">
                      ¿Quiénes somos?
                      </h2>
                    <p class="">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis et quasi aut facere vitae vero. Inventore, minus ab voluptate modi repellat, pariatur tempora quisquam.
                    </p>
                </div>
                <div class="col-lg-6">
                      <img src="/images/aboutus3.jpg" alt="Proyecto 1" width="500"
                        class="img-fluid" alt="About Image">
                </div>
            </div>
        </div>
    </section>
 
    <!-- Carousel Section -->
    <section class="carousel-section">
        <div id="carouselExampleControls"
             class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/images/aboutus3.jpg" alt="Proyecto 1" width="500"
                         class="d-block w-100"
                         alt="Food Image 1">
                </div>
            </div>
          
        </div>
    </section>
 
    <!-- Reservation and Contact Section -->
    <section id="reservations" class="reservation-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h2 class="section-heading">
                      Contáctanos 
                      </h2>
                    <form>
                        <div class="form-group">
                            <label for="name">Tu nombre</label>
                            <input type="text" class="form-control"
                                   id="name" placeholder="Ingresa tu correo">
                        </div>
                        <div class="form-group">
                            <label for="phoneNumber">
                              Télefono 
                              </label>
                            <input type="text"
                                   class="form-control" id="phoneNumber"
                                   placeholder="Ingresa tu número">
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Enviar
                          </button>
                    </form>
                </div>
                <div class="col-lg-6 opening-time">
                    <h2 class="section-heading">Horarios</h2>
                    <p class="text-muted">
                        <span>Lunes—Jueves: 08:00 — 22:00</span><br>
                        <span>Viernes—Sabado: 09:00 — 23:00</span><br>
                        <span>Domingo: 10:00 — 17:00</span>
                    </p>
                    <h2 class="section-heading">Contact</h2>
                    <p class="text-muted">
                        <span>410-602-8008</span><br>
                        <span>CDMX México</span><br>
                        <span>Palo-Alto, 1111 CA</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
 
    <!-- Footer Section -->
      
    <footer class="footer footer-section text-center">
        <div class="container">
            <p>© 2024 Nombre de restaurante. Todos los derechos reservados.</p>
        </div>
    </footer>
    
</body>
 
</html>
      `,
      cssContent: `

.navbar {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; /* Permite que los elementos se ajusten a múltiples líneas */
}
.nav-flex-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    z-index: 100;
    left: 0;
    width: 100%;
    padding: 0;
}
 
.nav-flex-row li {
    text-decoration: none;
    list-style-type: none;
    padding: 20px 15px;
}
 
.nav-flex-row li a {
    font-family: 'Big Shoulders Text', cursive;
    color: #000;
    font-size: 1.5em;
    text-transform: uppercase;
    font-weight: 300;
}
 
.nav-flex-row li a:hover {
    background: #E7E7E7;
}
 
.section-intro {
    height: 820px;
    background-image: url(img/foddiee.png);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
 
.section-intro h1 {
    text-align: center;
    color: #000;
    font-size: 4em;
    font-weight: 700;
}
 
.section-intro header {
    display: flex;
    flex: 4;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
 
.link-to-book-wrapper {
    flex: 1;
}
 
.about-section {
    display: flex;
    align-items: center;
    background-color: #f3f3f3c0;
    padding: 50px 30px;
}
 
.link-to-book {
    color: #ffffff;
    display: block;
    border: 2px solid #ffffff;
    padding: 5px 10px;
}
 
a.link-to-book:hover {
    background-color: #ffffff;
    color: #95999e;
    text-decoration: none;
}
 
.about-section p,
.about-section h3 {
    text-align: center;
    width: 60%;
    margin: auto;
    font-family: ;
    font-size: 1.4em;
    text-transform: uppercase;
}
 
.carousel-inner {
    height: 700px;
}
 
.row-flex {
    display: flex;
    flex-direction: row;
}
 
.flex-column-form {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 30px 20px;
}
 
.btn.btn-primary {
    font-family: 'Big Shoulders Text', cursive;
    color: #ffffff;
    background-color: #95999e;
    text-transform: uppercase;
    font-size: 16px;
    padding: 5px 10px;
    letter-spacing: 2px;
    border: 0;
}
 
.btn.btn-primary:hover {
    background-color: #747474;
}
 
.opening-time,
.contact-address {
    flex: 1;
    margin: 30px 20px;
    font-size: 1.2em;
}
 
.form-group p {
    font-size: 1.2em;
}
 
.opening-time p span,
.contact-address p span {
    display: block;
}
    
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
}
 
@media (min-width:577px) and (max-width: 800px) {
 
    .section-intro {
        height: 500px;
    }
 
    .about-section p,
    .about-section h3 {
        font-size: 20px;
    }
 
    .carousel-inner {
        height: auto;
    }
 
    .row-flex {
        display: flex;
        flex-direction: column;
    }
}
 
@media screen and (max-width: 576px) {
    .section-intro {
        height: 300px;
    }
 
    .about-section {
        padding: 30px;
    }
 
    .section-intro h1 {
        font-size: 2em;
    }
 
    .about-section p,
    .about-section h3 {
        font-size: 15px;
    }
 
    .carousel-inner {
        height: auto;
    }
 
    .row-flex {
        display: flex;
        flex-direction: column;
    }
 
    .row-flex h3 {
        font-size: 25px;
        text-align: center;
    }
 
    .form-group p {
        font-size: 15px;
    }
 
    .opening-time p span,
    .contact-address p span {
        font-size: 15px;
        text-align: center;
    }
 
}
 
.carousel-item img {
    background-repeat: no-repeat;
    background-size: cover;
}
      `,
      jsContent: `
<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
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
