import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from '../HomePage/HomePage';
import Api from '../../utils/Api';
import { chefs } from '../../mocks-data/mock-chefs';
import ChefList from '../ChefList/ChefList';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRestaurants, setIsRestaurants] = useState([]);
  const [isDishes, setIsDishes] = useState([]);
  const [isChefs, setIsChefs] = useState([]);
  const [isChefOfWeek, setIsChefOfWeek] = useState([]);
  const [isRestByChef, setIsRestByChef] = useState([]);

  console.log(isRestByChef)
  useEffect(() => {
    Api.getAllInfo().then(([rests, chefs, dishes, chefOfWeek]) => {
      setIsRestaurants(rests);
      setIsDishes(dishes);
      setIsChefs(chefs);
      setIsChefOfWeek(chefOfWeek);
    });
  }, []);

  useEffect(() => {
    const chefId = isChefOfWeek.map((chef: any) => 
     chef._id 
    )
    Api.getRestaurantsByChef(chefId).then((restById) => {
      setIsRestByChef(restById);
    });
  }, []);

  function handleOpenCart() {
    setIsCartOpen(!isCartOpen);
  }
  function handleOpenSearch() {
    setIsSearchOpen(!isSearchOpen);
  }
  function handleOpenMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleClose() {
    setIsCartOpen(false);
    setIsSearchOpen(false);
    setIsMenuOpen(false);
  }

  AOS.init({
    offset: 200,
    duration: 400,
    easing: 'ease-in-sine',
    delay: 80,
  });

  return (
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
      <HomePage
        restaurants={isRestaurants}
        dishes={isDishes}
        isChefs={isChefs}
        chefOfWeek={isChefOfWeek}
        restsById={isRestByChef}
      />
      <Footer />
    </div>
  );
}

export default App;
