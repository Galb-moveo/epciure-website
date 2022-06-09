import { TbCurrencyShekel } from 'react-icons/tb';

const Dish = (props: any) => {
  return (
    <li className='dish__item'>
      <img className='dish__image' src={props.dish.image} alt='' />
      <div className='dish__wrapper'>
        <h3 className='dish__name'>{props.dish.name}</h3>
        <p className='dish__description'>{props.dish.description}</p>
        <div className='dish__price_wrap'>
          <hr className='dish__hr' />
          {!props.dish.price ? (
            <p className='dish__type'>
              <TbCurrencyShekel style={{ verticalAlign: 'middle' }} />
              {props.dish.price}
            </p>
          ) : (
            <img
              className='dish__type'
              src={props.dish.type}
              alt='type'
              style={{ width: '35px' }}
            />
          )}
          <p className='dish__type_mobile'>
            <TbCurrencyShekel style={{ verticalAlign: 'middle' }} />
            {props.dish.price}
          </p>
          <hr className='dish__hr' />
        </div>
      </div>
    </li>
  );
};

export default Dish;
