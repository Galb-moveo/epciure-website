import React from 'react';
import Dish from '../Dish/Dish';
import { dishes } from '../../mocks-data/mock-dishes';

const DishesList = () => {
  return (
    <div className='restaurant'>
      <h2 className='restaurant__title'>SIGNATURE DISH OF:</h2>
      <ul className='restaurant__list'>
        {dishes.map((dish) => (
          <Dish dish={dish} key={dish.name} />
        ))}
      </ul>
    </div>
  );
};

export default DishesList;
