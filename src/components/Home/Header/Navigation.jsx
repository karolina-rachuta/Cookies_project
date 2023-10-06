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
                <a href=""><img src="" alt=""/><i className="fa-brands fa-instagram" style={{color: "white", fontSize: "30px", fontWeight: "bold"}}></i></a>
                <a href=""><img src="" alt=""/><i className="fa-brands fa-tiktok" style={{color: "white", fontSize: "24px", fontWeight: "bold"}}></i></a>
                <a href=""><img src="" alt=""/><i className="fa-brands fa-youtube"style={{color: "white", fontSize: "30px"}}></i></a>
            </li>
        </ul>
    )
}

export default Navigation;