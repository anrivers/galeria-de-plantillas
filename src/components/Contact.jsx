import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (

<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </aside>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      
      <div className="max-w-xl lg:max-w-3xl">
      
        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        CONTACTO
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500">
        Complete el formulario a continuación para ponerse en contacto con nosotros.
        </p>

        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
             Nombre:
            </label>

            <input
              type="text"
              id="FirstName"
              name="first_name"
              required
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
             Apellido:
            </label>

            <input
              type="text"
              id="LastName"
              name="last_name"
              required
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Correo Electrónico </label>

            <input
              type="email"
              id="Email"
              name="email"
              required
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 ">
            <label htmlFor="Text" className="block text-sm font-medium text-gray-700"> Comentarios </label>

            <input
              type="text"
              id="Text"
              name="text"
              required
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
              />

              <span className="text-sm text-gray-700">
                Quiero recibir correos sobre actualizaciones
              </span>
            </label>
          </div>


          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className="inline-block shrink-0 rounded-md border border-blue-700 bg-blue-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Enviar
            </button>

    
          </div>
        </form>
        <div className="flex flex-col items-center mt-8">
        <h3 className=" mb-4 mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Información de contacto</h3>
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="text-blue-700 mr-4" />
          <p className="text-lg">Calle Leibnitz 270 PB Anzures, CDMX. C.P. 11590</p>
        </div>
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faPhone} size="2x" className="text-blue-700 mr-4" />
          <p className="text-lg"> +52 1 312 154 3747</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-blue-700 mr-4" />
          <p className="text-lg">contacto@denedig.online</p>
        </div>
      </div>
      </div>
    </main>
  </div>
</section>
  );
}

export default Contact;