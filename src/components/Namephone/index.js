import { Link } from "react-router-dom"
import "./styles.scss"

export function Namephone({name,slug}){

    return(
        <article className="card">
            <div>
                 <Link to={`phones/${slug}`}>
                    <div className="card-title">{name}</div>
                </Link>
            </div>
        </article>
    )
}
