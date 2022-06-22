import { Link } from "react-router-dom"
import "./styles.scss"

export function Header(){
    return(
        <header>
            <Link to="/">
                SPhones
            </Link>
        </header>
    )
}