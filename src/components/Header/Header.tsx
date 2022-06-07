import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import Modal from '../Modal/Modal';
const Header = (props: any) => {
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__wrapper'>
          <img className='header__logo' src={logo} alt='epicure-logo' />
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
              <button className='header__button_search' type='button'></button>
            </li>
            <li>
              <button
                className='header__button_personal'
                type='button'
              ></button>
            </li>
            <li>
              <button
                className='header__button_cart'
                type='button'
                onClick={props.openCart}
              ></button>
            </li>
          </ul>
        </div>
        {props.isOpen && <Modal />}
      </div>
    </div>
  );
};

export default Header;
