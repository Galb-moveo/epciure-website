import arrow from '../../assets/images/doubleArrow.svg';
import { restaurant } from '../../mocks-data/mock-restaurants';
import PopularRestaurants from '../popularRestaurants/popularRestaurants';

const RestaurantsList = () => {
  return (
      <div className='restaurant'>
        <h2 className='restaurant__title'>popular restaurant in epicure:</h2>
        <ul className='restaurant__list'>
          {restaurant.map((item) => (
            <PopularRestaurants item={item} key={item.name} />
          ))}
        </ul>
        <button className='restaurant__button'>
          All restaurants
          <img src={arrow} alt='' style={{ width: '24px', height: '14px' }} />
        </button>
      </div>
  );
};

export default RestaurantsList;
