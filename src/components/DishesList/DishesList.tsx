import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Dish from '../Dish/Dish';
import { sliderSettings } from '../../constants/sliderSettings';
import arrow from '../../assets/images/doubleArrow.svg';
import { dishes } from '../../mocks-data/mock-dishes';

const DishesList = () => {
  return (
    <div className='restaurant'>
      <div className='restaurant__container' data-aos='zoom-out'>
      <h2 className='restaurant__title'>SIGNATURE DISH OF:</h2>
      <Slider {...sliderSettings}>
        {dishes.map((dish) => (
          <Dish dish={dish} key={dish.name} />
        ))}
      </Slider>
      <div className='restaurant__button_wrap'>
        <button className='restaurant__button'>
          All restaurants{' '}
          <img className='restaurant__button_arrow' src={arrow} alt='arrow' />
        </button>
      </div>
      
      </div>
    </div>
  );
};

export default DishesList;
