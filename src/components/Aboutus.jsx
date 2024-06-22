import React from "react";
import '../index.css'; 

export const AboutUs = () => {
    return (
        <div className="max-w-4xl mx-auto p-5 bg-white rounded-lg">
            <h2 className="text-center font-bold mb-5 text-2xl">SOBRE NOSOTROS</h2>
            <p className="text-center text-lg mb-10">
                Somos una empresa dedicada a ofrecer las mejores plantillas web para tu sitio. 
                Nuestro equipo está compuesto por diseñadores y desarrolladores con amplia experiencia en el campo.
            </p>
            <div className="mt-5">
                <div className="flex items-center mb-10">
                    <img src="images/aboutus1.jpg" alt="Nuestra Misión" className="w-1/2 rounded-lg mr-5"/>
                    <div className="w-1/2 p-5">
                        <h3 className="mb-2 font-bold text-2xl">Nuestra Misión</h3>
                        <p>
                            Impulsar el éxito empresarial proporcionando soluciones digitales personalizadas, optimizando operaciones y mejorando la experiencia del usuario.
                        </p>
                    </div>
                </div>
                <div className="flex items-center flex-row-reverse mb-10">
                    <img src="images/aboutus2.jpg" alt="Nuestro Equipo" className="w-1/2 rounded-lg ml-5"/>
                    <div className="w-1/2 p-5">
                        <h3 className="mb-2 font-bold text-2xl">Nuestro Equipo</h3>
                        <p>
                            Contamos con un equipo multidisciplinario de profesionales apasionados por el diseño web y la tecnología.
                        </p>
                    </div>
                </div>
                <div className="flex items-center mb-10">
                    <img src="images/aboutus3.jpg" alt="Nuestros Valores" className="w-1/2 rounded-lg mr-5"/>
                    <div className="w-1/2 p-5">
                        <h3 className="mb-2 font-bold text-2xl">Nuestros Valores</h3>
                        <ul className="list-none p-0">
                            <li className="mb-2 text-xl">Innovación</li>
                            <li className="mb-2 text-xl">Responsabilidad</li>
                            <li className="mb-2 text-xl">Transparencia</li>
                            <li className="mb-2 text-xl">Flexibilidad</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};