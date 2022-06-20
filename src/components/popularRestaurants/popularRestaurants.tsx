import fullStar from '../../assets/images/starFull.svg';
import emptyStar from '../../assets/images/starEmpty.svg';

const PopularRestaurants = (props: any) => {
  const rest = props.item;
  let filledStarsArray: JSX.Element[] = [];
  for (let i = 0; i < rest.stars; i++) {
    filledStarsArray.push(<img src={fullStar} alt=''></img>);
  }

  let emptyStarsArray: JSX.Element[] = [];
  for (let i = 0; i < 5 - rest.stars; i++) {
    emptyStarsArray.push(<img src={emptyStar} alt=''></img>);
  }
  
  return (
    <>
    {rest.isPopular && <li className='restaurant__item'>
    <img className='restaurant__image' src={rest.image} alt='img' />
    <div className='restaurant__wrapper'>
      <h3 className='restaurant__name'>{rest.name}</h3>
      <p className='restaurant__chef'>{rest.Chef.name}</p>
      <div className='restaurant__starts'>
        {filledStarsArray.map((fullStar, index) => (
          <div key={index}>{fullStar}</div>
        ))}
        {emptyStarsArray.map((emptyStar, index) => (
          <div key={index}>{emptyStar}</div>
        ))}
      </div>
    </div>
  </li>}

  </>
  );
};

export default PopularRestaurants;
