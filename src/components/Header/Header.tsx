import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import mobileLogo from '../../assets/images/mobile-logo.svg'
import { AiOutlineMenu } from 'react-icons/ai';
import CartModal from '../Modals/cart/cartModal';
import SearchModal from '../Modals/search/searchModal';
import MenuModal from '../Modals/menu/MenuModal';
const Header = (props: any) => {
  return (
    <header className='header'>
      <div className='header__container'>
      <div className='header__mobile_wrapper'>
          <AiOutlineMenu className='header__nav_mobile' onClick={props.openMenu}/>
          </div>
        <div className='header__wrapper'>
          <img className='header__logo_desk' src={logo} alt='desk-logo' />
          <img className='header__logo_mobile' src={mobileLogo} alt='mobile-logo' />
          <nav className='header__nav'>
            <NavLink className='header__nav-item' to='/'>
              Restaurants
            </NavLink>
            <NavLink className='header__nav-item' to='/'>
              Chefs
            </NavLink>
          </nav>
        </div>
        <div className='header__icons_wrapper'>
          <ul className='header__icons'>
            <li>
              <button className='header__button header__button_search' type='button' onClick={props.openSearch}></button>
            </li>
            <li>
              <button
                className='header__button header__button_personal'
                type='button'
              ></button>
            </li>
            <li>
              <button
                className='header__button header__button_cart'
                type='button'
                onClick={props.openCart}
              ></button>
            </li>
          </ul>
        </div>
        {props.isOpen && <CartModal onClose={props.onClose}/>}
        {props.isOpenSearch && <SearchModal onClose={props.onClose}/>}
        {props.isOpenMenu && <MenuModal onClose={props.onClose}/>}
      </div>
    </header>
    
  );
};

export default Header;
