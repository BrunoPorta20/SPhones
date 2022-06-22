import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import "./styles.scss";

export function Phones() {
    const { slug } = useParams();

    const [detailPhones, setDetailPhones] = useState([]);
    
    useEffect(() => {
        async function getDetailPhones() {
            const response = await fetch(`https://api-mobilespecs.azharimm.site/v2/brands/${slug}`);
            const data = await response.json();
            setDetailPhones(data.data);
            console.log(data.data)
        }
        getDetailPhones();
    }, [slug]);

    return(
        <main className='phones'>
            <div className='main-title'>{detailPhones.title}</div>
            <div className='container'>
            {detailPhones?.phones && detailPhones?.phones.map( phone => 
                <article className="card">
                    <div className="card-image">
                        <img src={phone.image} alt={phone.phone_name}/>
                    </div>
                    <Link to={`/phone/${phone.slug}`}>
                        <div className="card-title">{phone.phone_name}</div>
                    </Link>
                </article>
                
                
            )}
            </div>
        </main>
    )
}