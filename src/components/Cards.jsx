import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to='/CardsDetail'>
        <button className="card-button">Ver más</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;