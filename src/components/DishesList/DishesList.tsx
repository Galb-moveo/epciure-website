import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Dish from '../Dish/Dish';
import { sliderSettings } from '../../constants/sliderSettings';
import arrow from '../../assets/images/doubleArrow.svg';

const DishesList = (props:any) => {
  return (
    <section className='restaurant restaurant__dish' data-aos='zoom-out'>
      <div className='restaurant__container'>
      <h2 className='restaurant__title'>SIGNATURE DISH OF:</h2>
      <Slider {...sliderSettings}>
        {props.restaurants.map((restaurant:any) => (
          <Dish restaurant={restaurant} key={restaurant._id} />
        ))}
      </Slider>
      <div className='restaurant__button_wrap'>
        <button className='restaurant__button'>
          All restaurants
          <img className='restaurant__button_arrow' src={arrow} alt='arrow' />
        </button>
      </div>
      </div>
    </section>
  );
};

export default DishesList;
