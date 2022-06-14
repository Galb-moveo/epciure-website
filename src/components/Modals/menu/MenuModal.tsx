import { AiOutlineClose } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
const MenuModal = (props:any) => {
  return (
    <div className='modal modal__menu scale-in-left'>
      <button className='modal__search_button' type='button'>
        <AiOutlineClose 
          style={{ width: '25px', height: '25px' }}
          onClick={props.onClose}
        />
      </button>
      <nav className='header__nav_modal'>
            <NavLink className='header__nav-item_modal' to='/'>
              Restaurants
            </NavLink>
            <NavLink className='header__nav-item_modal' to='/'>
              Chefs
            </NavLink>
          </nav>
          <hr style={{width:'100%', opacity: '0.3'}}/>
          <div>
          <nav className="footer__nav footer__nav_modal">
            <li><Link className="footer__link" to='/'>Contact Us</Link></li>
            <li><Link className="footer__link" to='/'>Term of Use</Link></li>
            <li><Link className="footer__link" to='/'>Privacy Policy</Link></li>
        </nav>
          </div>
          
    </div>
  )
}

export default MenuModal