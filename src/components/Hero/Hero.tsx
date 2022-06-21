const Hero = (props: any) => {

  return (
    <section className='hero '>
      <form className='hero__search'>
        <h3 className='hero__title'>
          Epicure works with the top chef restaurants in Tel Aviv
        </h3>
        <div className='hero__search_wrapper rotate-center'>
          <button type='submit' className='hero__button'></button>
          <input
            onChange={props.handleChange}
            className='hero__input'
            type='search'
            name='keyword'
            placeholder='Search for restaurant cuisine, chef'
          />
          <div className='hero__autoComplete'>
            {props.isKeyword.keyword !== '' &&
              props.isSearchData.map((data: any, i: number) => {
                if (data.Chefs) {
                  return data.Chefs.map((chef: any, i: number) => (
                    <a className='hero__autoComplete_item' href='/' key={i}>
                      Chef: {chef.name}
                    </a>
                  ));
                }
                if (data.Dishes) {
                  return data.Dishes.map((dish: any, i: number) => (
                    <a className='hero__autoComplete_item' href='/' key={i}>
                      Dish: {dish.name}
                    </a>
                  ));
                }
                if (data.Restaurants) {
                  return data.Restaurants.map((rest: any, i: number) => (
                    <a className='hero__autoComplete_item' href='/' key={i}>
                      Restaurant: {rest.name}
                    </a>
                  ));
                }
                else{
                  return console.log('some error occurred');
                }
              })}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Hero;
