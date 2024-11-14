import { NavLink } from "react-router-dom";
import logo from '../assets/images/site-logo.png';
import iconShopping from '../assets/images/icons/icon-shopping-bag.png'

const Navbar = () => {
    return (
        <header>
            <nav className="menu">
                <div className="menu-site-link">
                    <NavLink to="/" className="site-link">
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div className="menu-wrapper">
                    <ul className="menu-list" datalevel="1">
                        <li className="menu-item active">
                            <NavLink to="/" className="site-link">Accueil</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/products" className="site-link">Nos produits</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="menu-shopping-bag">
                    <img src={iconShopping} alt="shopping bag icon" />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;