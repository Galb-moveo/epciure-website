import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import arrow from '../../assets/images/doubleArrow.svg';
import { sliderSettings } from '../../constants/sliderSettings';
const ChefOfWeek = (props: any) => {
  return (
    <div className='chef'>
      <h3 className='chef__title'>Chef of the week:</h3>
      <div className='chef__intro'>
        <div className='chef__image_wrap'>
          <img
            className='chef__image'
            data-aos='flip-down'
            src={props.chef.image}
            alt='chef'
            style={{ width: '478px' }}
          />
          <div className='hide'>{props.chef.name}</div>
        </div>

        <p className='chef__description'>{props.chef.description}</p>
      </div>
      <h4 className='chef__res'>{props.chef.title} Restaurants</h4>
      <div data-aos='fade-down-right'>
        <Slider {...sliderSettings}>
          {props.chef.restaurants.map((res: any) => (
            <li key={res.name}>
              <div className='chef__res-item'>
                <img className='chef__res-image' src={res.image} alt='dish' />
                <div className='chef__res_name_wrap'>
                  <p className='chef__res-name'>{res.name}</p>
                </div>
              </div>
            </li>
          ))}
        </Slider>
      </div>
      <div className='restaurant__button_wrap'>
        <button className='restaurant__button'>
          All restaurants{' '}
          <img className='restaurant__button_arrow' src={arrow} alt='arrow' />
        </button>
      </div>
    </div>
  );
};

export default ChefOfWeek;
