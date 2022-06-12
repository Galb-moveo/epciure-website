import AboutUs from '../AboutUs/AboutUs';
import ChefList from '../ChefList/ChefList';
import DishesList from '../DishesList/DishesList';
import Hero from '../Hero/Hero';
import Icons from '../Icons/Icons';
import RestaurantsList from '../RestaurantsList/RestaurantsList';

const HomePage = () => {
  return (
    <section className='homePage'>
      <Hero />
      <RestaurantsList />
      <DishesList />
      <Icons />
      <ChefList />
      <AboutUs />
    </section>
  );
};

export default HomePage;
