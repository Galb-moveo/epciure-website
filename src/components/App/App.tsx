import { useState } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ChefList from '../ChefList/ChefList';
import DishesList from '../DishesList/DishesList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Icons from '../Icons/Icons';
import RestaurantsList from '../RestaurantsList/RestaurantsList';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleOpenCart() {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <div className='app'>
      <Header openCart={handleOpenCart} isOpen={isCartOpen} />
      <Hero />
      <RestaurantsList />
      <DishesList />
      <Icons />
      <ChefList />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
