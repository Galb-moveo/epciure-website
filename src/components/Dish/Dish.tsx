import { TbCurrencyShekel } from 'react-icons/tb';

const Dish = (props: any) => {
  const signatureDish = props.restaurant.SignatureDish;
  return (
    <li className='dish__item'>
      <img className='dish__image' src={signatureDish.image} alt='' />
      <div className='dish__wrapper'>
        <h3 className='dish__name'>{signatureDish.name}</h3>
        <p className='dish__description'>{signatureDish.description}</p>
        <div className='dish__price_wrap'>
          <hr className='dish__hr' />
          {!signatureDish.price ? (
            <p className='dish__type'>
              <TbCurrencyShekel style={{ verticalAlign: 'middle' }} />
              {props.dish.price}
            </p>
          ) : (
            <img
              className='dish__type'
              src={signatureDish.tags}
              alt='type'
              style={{ width: '35px' }}
            />
          )}
          <p className='dish__type_mobile'>
            <TbCurrencyShekel style={{ verticalAlign: 'middle' }} />
            {signatureDish.price}
          </p>
          <hr className='dish__hr' />
        </div>
      </div>
    </li>
  );
};

export default Dish;
