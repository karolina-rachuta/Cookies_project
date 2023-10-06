import {Link as ScrollLink} from "react-scroll";


const Navigation = ({menuOpen}) => {


    return (
        <ul className={menuOpen ? "open" : ""}>
            <li><ScrollLink to="about">About</ScrollLink></li>
            <li><ScrollLink to="order">Order</ScrollLink></li>
            <li><ScrollLink to="events">Events & Catering</ScrollLink></li>
            <li><ScrollLink to="faq">FAQ</ScrollLink></li>
            <li><ScrollLink to="contact">Contact Us</ScrollLink></li>
            <li>
                <a href=""><img src="" alt=""/>fb</a>
                <a href=""><img src="" alt=""/>in</a>
                <a href=""><img src="" alt=""/>yt</a>
            </li>
        </ul>
    )
}

export default Navigation;