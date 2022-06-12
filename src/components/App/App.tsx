import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from '../HomePage/HomePage';

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
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
