import { chefs } from '../../mocks-data/mock-chefs';
import ChefOfWeek from '../ChefOfWeek/ChefOfWeek';
const ChefList = () => {
  return (
    <ul style={{ padding: '0'}}>
      {chefs.map((chef) => (
        <ChefOfWeek chef={chef} key={chef.title} />
      ))}
    </ul>
  );
};

export default ChefList;
