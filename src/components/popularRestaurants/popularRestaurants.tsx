import fullStar from '../../assets/images/starFull.svg';
import emptyStar from '../../assets/images/starEmpty.svg';

const PopularRestaurants = (props: any) => {
  let filledStarsArray: JSX.Element[] = [];
  for (let i = 0; i < props.item.stars; i++) {
    filledStarsArray.push(<img src={fullStar} alt=''></img>);
  }

  let emptyStarsArray: JSX.Element[] = [];
  for (let i = 0; i < 5 - props.item.stars; i++) {
    emptyStarsArray.push(<img src={emptyStar} alt=''></img>);
  }
  return (
    <li className='restaurant__item'>
      <img className='restaurant__image' src={props.item.image} alt='img' />
      <div className='restaurant__wrapper'>
        <h3 className='restaurant__name'>{props.item.name}</h3>
        <p className='restaurant__chef'>{props.item.chef}</p>
        <div className='restaurant__starts'>
          {filledStarsArray.map((fullStar) => fullStar)}
          {emptyStarsArray.map((emptyStar) => emptyStar)}
        </div>
        <div className='test2'></div>
      </div>
    </li>
  );
};

export default PopularRestaurants;
