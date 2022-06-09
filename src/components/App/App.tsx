import { useEffect, useState } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ChefList from '../ChefList/ChefList';
import DishesList from '../DishesList/DishesList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Icons from '../Icons/Icons';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleOpenCart() {
    setIsCartOpen(!isCartOpen);
  }
  function handleOpenSearch() {
    setIsSearchOpen(!isSearchOpen);
    console.log('test');
  }
  function handleOpenMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleClose() {
    setIsCartOpen(false);
    setIsSearchOpen(false);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
      delay: 80,
    });
  }, []);

  return (
    <>
      <div className='app'>
        <Header
          openCart={handleOpenCart}
          isOpen={isCartOpen}
          openSearch={handleOpenSearch}
          isOpenSearch={isSearchOpen}
          openMenu={handleOpenMenu}
          isOpenMenu={isMenuOpen}
          onClose={handleClose}
        />
        <Hero />
        <RestaurantsList />
        <DishesList />
        <Icons />
        <ChefList />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
