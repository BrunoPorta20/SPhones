import { useEffect, useState } from "react"
import { Namephone, Phone } from "../../components/Namephone";

import './styles.scss';

export function Home() {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        async function getPhones() {
            const responsive = await fetch("https://api-mobilespecs.azharimm.site/v2/brands/")
            const data = await responsive.json();
            console.log(data.data);
            setPhones(data.data);
        }
        getPhones()
    }, [])

    return (
        <main className="home">
            <div className="main-title">
                    Marcas
            </div>
            <div className="container">
                {phones.map(phone =>
                <Namephone 
                    key={phone.brand_slug}
                    slug={phone.brand_slug}
                    name={phone.brand_name}
                
                
                />
                )}
            </div>
        </ main >
    )
}