import { Link } from "react-router-dom";
import logo from '../assets/images/site-logo.png';
import iconGitHub from '../assets/images/icons/icon-github.png';
import iconLinkedIn from '../assets/images/icons/icon-linkedin.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-content">
                    <div className="menu-site-link">
                        <Link to="/" className="site-link">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="footer-text">
                        Ce site est le projet entièrement fictif de <a href="https://justinersu.github.io/">Justine Rousseau</a><br />
                        <em>pst.... ce serait une tellement bonne idée si quelqu’un veut s’y lancer</em>
                    </div>
                    <div className="footer-icons">
                        <a href="https://github.com/Justinersu/le-sorcier-barista" target="_blank">
                            <img src={iconGitHub} /></a>
                        <a href="https://www.linkedin.com/in/justinersu05/" target="_blank">
                            <img src={iconLinkedIn} /></a>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;