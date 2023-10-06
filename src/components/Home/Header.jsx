import Navigation from "./Header/Navigation.jsx";
import {Link as ScrollLink} from "react-scroll";
import {Link} from "react-router-dom";
import {useState} from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(prevState => !prevState);
    }

    return (
        <header className="container">
            <nav>
                <div className="nav__firstRow">
                    <Link to="/" className="logo">Cookies</Link>
                    <div className="menu__box">
                        <ScrollLink to="order" className="nav__order">ORDER NOW</ScrollLink>
                        <div className="menu" onClick={handleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div><Navigation menuOpen={menuOpen}/></div>
            </nav>
        </header>
    )
}
export default Header;