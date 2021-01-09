import React from 'react'
import './style.css'
import CardMenu from './CardMenu'

export default ({ item }) => {
    return (
        <div className='card'>
            <div className='card-image'
                style={{
                    backgroundImage: `url(${item.volumeInfo.imageLinks.thumbnail})`
                }}
            />
            <CardMenu item={item} />
        </div>
    )
}