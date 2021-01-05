import React, { useEffect, useState } from 'react'
import BooksList from '../../components/BooksList'
import Header from '../../components/Header'
import Outdoor from '../../components/Outdoor'
import './style.css'

export default () => {
    const [transparentHeader, setTransparentHeader] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                console.log('altera para branco')
                setTransparentHeader(true);
            } else {
                setTransparentHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return (
        <div className='content'>
            <Header white={transparentHeader} />
            <Outdoor />
            <main className='default-main'>
                <BooksList />
            </main>
        </div>
    )
}