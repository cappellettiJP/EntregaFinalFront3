import React, { useState } from 'react';
import styles from './FavoriteButton.module.css';

const FavoriteButton = ({onClick}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onClick();
  };

  return (
    <button
      className={`${styles['favorite-button']} ${isFavorite ? styles['favorite'] : ''}`}
      onClick={handleToggleFavorite}
    >
      {isFavorite ? 'Favorito' : 'Agregar a favoritos'}
    </button>
  );
};

export default FavoriteButton;
