import React from 'react';
import FavoriteButton from './FavoriteButtom';
import ExpandedCard from './ExpandedCards';
import './Cards.modules.css';

const Cards = ({ dentist }) => {

  return (
    <div className='Cards'>
      <h2>{`${dentist.name}`}</h2>
      <p>{`Username: ${dentist.username}`}</p>
      <FavoriteButton />
    </div>
  );
};

export default Cards;