import Navigation from "./Header/Navigation.jsx";
import {Link as ScrollLink} from "react-scroll";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="container">
            <nav>
            <h1><Link to="/">LOGO</Link></h1>
            <ul>
                <li><ScrollLink to="order">ORDER NOW</ScrollLink></li>
               <li><Navigation /></li>
            </ul>
</nav>
        </header>
    )
}
export default Header;