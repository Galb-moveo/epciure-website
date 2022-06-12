const Hero = () => {
  return (
    <section className='hero '>
      <div className='hero__search'>
        <h3 className='hero__title'>
          Epicure works with the top chef restaurants in Tel Aviv
        </h3>
        <div className='hero__search_wrapper rotate-center'>
          <button className='hero__button'></button>
          <input
            className='hero__input'
            type='text'
            name=''
            placeholder='Search for restaurant cuisine, chef'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
