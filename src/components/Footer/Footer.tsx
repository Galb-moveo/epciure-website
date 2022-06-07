import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className="footer">
        <nav className="footer__nav">
            <li><Link className="footer__link" to='/'>Contact Us</Link></li>
            <li><Link className="footer__link" to='/'>Term of Use</Link></li>
            <li><Link className="footer__link" to='/'>Privacy Policy</Link></li>
        </nav>
    </div>
  )
}

export default Footer