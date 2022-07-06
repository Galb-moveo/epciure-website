import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from '../HomePage/HomePage';
import Api from '../../utils/Api';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRestaurants, setIsRestaurants] = useState([]);
  const [isDishes, setIsDishes] = useState([]);
  const [isChefs, setIsChefs] = useState([]);
  const [isChefOfWeek, setIsChefOfWeek] = useState([]);
  const [isRestByChef, setIsRestByChef] = useState([]);
  const [isKeyword, setKeyword] = useState({ keyword: '' });
  const [isSearchData, setIsSearchData] = useState([
    { Chefs: [] },
    { Dishes: [] },
    { Restaurants: [] },
  ]);

  useEffect(() => {
    Api.getAllInfo().then(([rests, chefs, dishes, chefOfWeek]) => {
      setIsRestaurants(rests);
      setIsDishes(dishes);
      setIsChefs(chefs);
      setIsChefOfWeek(chefOfWeek);
    });
  }, []);

  useEffect(() => {
    let id = '';
    // eslint-disable-next-line array-callback-return
    isChefOfWeek.map((chef: any) => {
      // eslint-disable-next-line array-callback-return
      isChefs.map((chefItem: any) => {
        if (chef.Chef.name === chefItem.name) {
          id = chefItem._id;
        }
      });
      Api.getRestaurantsByChef(id).then((restById) => {
        setIsRestByChef(restById);
      });
    });
  }, [isChefOfWeek, isChefs]);

  useEffect(() => {
    if (isKeyword.keyword === '') {
      return;
    } else {
      Api.getSearchResults(isKeyword.keyword)
        .then((data) => {
          setIsSearchData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isKeyword.keyword]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setKeyword({ ...isKeyword, [name]: value });
  };

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
    duration: 300,
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
        handleChange={handleChange}
        isSearchData={isSearchData}
        isKeyword={isKeyword}
      />
      <Footer />
    </div>
  );
}

export default App;
