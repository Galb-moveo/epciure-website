import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer className="footer">
        <nav className="footer__nav">
            <li><button className="footer__link" disabled>Contact Us</button></li>
            <li><button className="footer__link" disabled>Term of Use</button></li>
            <li><button className="footer__link" disabled>Privacy Policy</button></li>
        </nav>
    </footer>
  )
}

export default Footer