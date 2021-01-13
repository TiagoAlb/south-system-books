import React, { Fragment } from 'react'
import CardMenu from './CardMenu'
import './style.css'

export default ({ item, noMenu }) => {
    return (
        <div className={`card${noMenu ? ' noMenu' : ''}`}>
            { item ?
                <Fragment>
                    <div className='card-image'
                        style={{
                            backgroundImage: `url(${item.volumeInfo.imageLinks.thumbnail})`
                        }}
                    />
                    {!noMenu ?
                        <CardMenu item={item} />
                        : ''}
                </Fragment>
                : <div className='card-image'
                    style={{
                        backgroundImage: `url(https://i2.wp.com/cenfewc.com.br/wp-content/uploads/2018/03/imagem-nao-disponivel.jpg?fit=600%2C600&ssl=1)`
                    }}
                />
            }
        </div>
    )
}