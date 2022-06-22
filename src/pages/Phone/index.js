import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"

import './styles.scss'

export function Phone() {

    const { slug } = useParams();
    const [detailPhone, setDetailPhone] = useState([]);

    useEffect(() => {
        async function getDetailPhone() {
            const response = await fetch(`https://api-mobilespecs.azharimm.site/v2/${slug}`);
            const data = await response.json();
            setDetailPhone(data.data);
            console.log(data.data)
        }
        getDetailPhone();
    }, [slug]);

    return (
        <main className='phone'>

            <div className='main-title'>{detailPhone.phone_name}</div>
            
            <div className='info'>
                <div className='info-left'>
                    {detailPhone.phone_images &&
                        <img src={detailPhone.phone_images[0]} alt={detailPhone.phone_name} />
                    }
                </div>
                <div className='info-right'>
                    <div>{detailPhone.release_date}</div>
                    <div>{detailPhone.dimension}</div>
                    <div>{detailPhone.os}</div>
                    <div>{detailPhone.storage}</div>
                </div>
            </div>







        </main>
    )
}