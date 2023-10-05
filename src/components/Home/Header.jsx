import Navigation from "./Header/Navigation.jsx";
import {Link as ScrollLink} from "react-scroll";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="container">
            <nav>
                <div className="nav__firstRow">
                    <Link to="/" className="logo">Cookies</Link>
                    <div className="menu__box">
                        <ScrollLink to="order" className="nav__order">ORDER NOW</ScrollLink>
                        <div className="menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div><Navigation/></div>
            </nav>
        </header>
    )
}
export default Header;