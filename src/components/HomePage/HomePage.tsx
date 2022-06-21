import AboutUs from '../AboutUs/AboutUs';
import ChefList from '../ChefList/ChefList';
import DishesList from '../DishesList/DishesList';
import Hero from '../Hero/Hero';
import Icons from '../Icons/Icons';
import RestaurantsList from '../RestaurantsList/RestaurantsList';

const HomePage = (props: any) => {
  return (
    <section className='homePage'>
      <Hero
        handleChange={props.handleChange}
        isKeyword={props.isKeyword}
        isSearchData={props.isSearchData}
      />
      <RestaurantsList restaurants={props.restaurants} />
      <DishesList dishes={props.dishes} restaurants={props.restaurants} />
      <Icons />
      <ChefList restsById={props.restsById} chefOfWeek={props.chefOfWeek} />
      <AboutUs />
    </section>
  );
};

export default HomePage;
