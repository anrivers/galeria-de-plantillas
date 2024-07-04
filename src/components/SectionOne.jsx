import React from "react";
import '../index.css'; 
import { Link } from "react-router-dom";

export const SectionOne = () => {
    return (
<section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
          Explora nuestra galería de plantillas web, diseñadas para diversos propósitos y estilos.
          </h2>

          <p className="mt-4 text-gray-600">
          Cada plantilla está optimizada para ofrecer una experiencia de usuario excepcional, con un diseño responsive y personalizable. Ya sea que necesites un sitio para tu negocio, portafolio personal, blog o tienda en línea, tenemos la plantilla perfecta para ti.
          </p>

          <Link
            to="/Templates"
            className="mt-8 inline-block rounded border border-blue-700 bg-blue-700 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-700 focus:outline-none focus:ring active:text-blue-700"
          >
            Ver plantillas
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};