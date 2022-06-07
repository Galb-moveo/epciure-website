import React from 'react';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__search'>
        <h3 className='hero__title'>Epicure works with the top chef restaurants in Tel Aviv</h3>
        <div className='hero__search_wrapper'>
          <button className='hero__button'></button>
          <input
          className='hero__input'
            type='text'
            name=''
            placeholder='Search for restaurant cuisine, chef'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
