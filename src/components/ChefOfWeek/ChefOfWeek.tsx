import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import arrow from '../../assets/images/doubleArrow.svg';
import { sliderSettings } from '../../constants/sliderSettings';
const ChefOfWeek = (props: any) => {
  
  const chef = props.Chef.Chef;
  const restById = props.restsById;
  console.log(restById, 'chef')
  return (
    <section className='chef'>
       <h3 className='chef__title'>Chef of the week:</h3>
      <div className='chef__intro'>
        <div className='chef__image_wrap'>
          <img
            className='chef__image'
            data-aos='flip-down'
            src={chef.image}
            alt='chef'
          />
          <div className='hide'>{chef.name}</div>
        </div>
        <p className='chef__description'>{chef.description}</p>
      </div>
      <h4 className='chef__res'>{chef.name} Restaurants</h4>
      <div className='chef__restaurant_list' data-aos='fade-down-right'>
        <Slider {...sliderSettings}>
          {restById.map((res: any) => (
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
      <div className='restaurant__button_wrap' style={{marginLeft:'16px'}}>
        <button className='restaurant__button'>
          All restaurants{' '}
          <img className='restaurant__button_arrow' src={arrow} alt='arrow' />
        </button>
      </div> 
    </section>
  );
};

export default ChefOfWeek;
