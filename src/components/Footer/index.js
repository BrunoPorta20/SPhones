import{ BsFacebook } from "react-icons/bs";
import{ BsInstagram } from "react-icons/bs";
import "./styles.scss"

export function Footer(){
    return(

        <footer>
            <div className="email">
                sphonnes@gmail.com
            </div>
            <ul className="social">
                <li><a href="https://www.facebook.com/" target="_blank"><BsFacebook/> </a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><BsInstagram/> </a></li>
            </ul>
        </footer>
    )
}