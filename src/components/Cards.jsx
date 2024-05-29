import React from 'react';
import './Cards.css';

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="card-button">Ver más</button>
      </div>
    </div>
  );
};

export default Card;