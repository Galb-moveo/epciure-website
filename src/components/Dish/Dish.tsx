import { TbCurrencyShekel } from 'react-icons/tb';

const Dish = (props: any) => {
  const signatureDish = props.dish;
  return (
    <li className='dish__item'>
      <img className='dish__image' src={signatureDish.image} alt='' />
      <div className='dish__wrapper'>
        <h3 className='dish__name'>{signatureDish.name}</h3>
        <p className='dish__description'>{signatureDish.description}</p>
        <div className='dish__price_wrap'>
          <div className='icons-dish__wrapper'>
            {!signatureDish.price ? (
              <p className='dish__type'>
                <TbCurrencyShekel style={{ verticalAlign: 'middle' }} />
                {props.dish.price}
              </p>
            ) : (
              signatureDish.tags.map((tag: any, index: any) => (
                <img
                  key={index}
                  className='dish__type'
                  src={tag}
                  alt='type'
                  style={{ width: '35px' }}
                />
              ))
            )}
          </div>
          <p className='dish__type_mobile'>
            <TbCurrencyShekel style={{ verticalAlign: 'middle' }} />
            {signatureDish.price}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Dish;
