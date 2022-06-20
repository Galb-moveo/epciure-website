import { chefs } from '../../mocks-data/mock-chefs';
import ChefOfWeek from '../ChefOfWeek/ChefOfWeek';
const ChefList = (props:any) => {
  // console.log(props.chefOfWeek)
  return (
    <section className='chefOfWeek'>
    <ul className='chef__list_ul'>
      {props.chefOfWeek.map((Chef:any) => (
        <ChefOfWeek Chef={Chef} key={Chef._id} restsById={props.restsById}/>
      ))}
    </ul>
    </section>
  );
};

export default ChefList;
