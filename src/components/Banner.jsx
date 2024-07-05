import React from "react";
import '../index.css'; 

export const Banner = () => {
    return (
<section
  className="relative bg-[url(https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
      PLANTILLAS WEB

        <strong className="block font-extrabold text-blue-700"> PREDISEÑADAS. </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
      ¡Comienza hoy mismo y crea un sitio web que te destaque en línea!
      </p>
    </div>
  </div>
</section>
    );
};