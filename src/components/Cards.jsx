import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imageUrl, title, description, templateId }) => {
  return (
    <div className="max-w-xs sm:max-w-md md:max-w-lg xl:max-w-xl w-full border border-gray-300 rounded-lg overflow-hidden m-5 shadow-lg transition-transform duration-200 hover:scale-105 mx-auto">
      <img src={imageUrl} alt={title} className="w-full h-[300px] object-cover" />
      <div className="p-5 flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{title}</h2>
        <p className="mt-2 text-gray-600 text-lg">{description}</p>
        <Link to={`/CardsDetail/${templateId}`}>
          <button className="mt-4 w-32 inline-block rounded-md border border-blue-700 bg-blue-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-transparent hover:text-blue-700 focus:outline-none focus:ring active:text-blue-700">
            Ver más
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;