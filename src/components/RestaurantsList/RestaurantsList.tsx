import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import arrow from '../../assets/images/doubleArrow.svg';
import { restaurant } from '../../mocks-data/mock-restaurants';
import PopularRestaurants from '../popularRestaurants/popularRestaurants';
import { sliderSettings } from '../../constants/sliderSettings';

const RestaurantsList = () => {
  return (
    <div className='restaurant'>
      <div className='restaurant__container' data-aos='zoom-in'>
      <h2 className='restaurant__title'>popular restaurant in epicure:</h2>
      <Slider {...sliderSettings}>
        {restaurant.map((item) => (
          <PopularRestaurants item={item} key={item.name} />
        ))}
      </Slider>
      <div className='restaurant__button_wrap'>
        <button className='restaurant__button'>
          All restaurants <img className='restaurant__button_arrow' src={arrow} alt='arrow' />
        </button>
      </div>
      </div>
    </div>
  );
};

export default RestaurantsList;
