import React from "react";
import '../index.css'; 
import { Link } from "react-router-dom";

export const SectionTwo = () => {
    return (
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Nuevas plantillas</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500">
      Explora nuestra galería y elige la plantilla que mejor se adapte a tu proyecto.
      </p>
    </header>

    <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <li>
        <Link to="/Templates" className="group relative block">
          <img
            src="https://images.unsplash.com/photo-1594823274242-19036bf455e9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">Plantilla de Blog</h3>

            <span
              className="mt-2 inline-block rounded border border-blue-700 bg-blue-700 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-white"
            >
              Ver plantillas
            </span>
          </div>
        </Link>
      </li>

      <li>
        <Link to="/Templates" className="group relative block">
          <img
            src="https://images.unsplash.com/photo-1594892185343-0241e1d47d15?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">Plantilla de Agencia</h3>

            <span
              className="mt-2 inline-block rounded border border-blue-700 bg-blue-700  px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-white"
            >
            Ver plantillas
            </span>
          </div>
        </Link>
      </li>

      <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <Link to="/Templates" className="group relative block">
          <img
            src="https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">Plantilla de Portafolio</h3>

            <span
              className="mt-2 inline-block rounded border border-blue-700 bg-blue-700  px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-white"
            >
               Ver plantillas
            </span>
          </div>
        </Link>
      </li>
    </ul>
  </div>
</section>
    );
};