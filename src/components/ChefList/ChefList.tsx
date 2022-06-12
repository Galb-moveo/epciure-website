import { chefs } from '../../mocks-data/mock-chefs';
import ChefOfWeek from '../ChefOfWeek/ChefOfWeek';
const ChefList = () => {
  return (
    <section className='chefOfWeek'>
    <ul className='chef__list_ul'>
      {chefs.map((chef) => (
        <ChefOfWeek chef={chef} key={chef.title} />
      ))}
    </ul>
    </section>
  );
};

export default ChefList;
