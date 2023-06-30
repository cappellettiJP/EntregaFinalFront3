import React from 'react';
import FavoriteButton from './FavoriteButton';
import './Cards.modules.css';

const Cards = ({ dentist }) => {
  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.findIndex((favorite) => favorite.id === dentist.id);

    
    if (index === -1) {
      favorites.push(dentist);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      console.log('Tarjeta agregada a favoritos:', dentist);
    } else {
      favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
            console.log('Tarjeta eliminada de favoritos:', dentist);
      console.log('Esta tarjeta ya está en favoritos:', dentist);
    }
  };

  return (
    <div className="Cards">
      <h2>{`${dentist.name}`}</h2>
      <p>{`Username: ${dentist.username}`}</p>
      <FavoriteButton onClick={handleAddToFavorites} />
    </div>
  );
};

export default Cards;
