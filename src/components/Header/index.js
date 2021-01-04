import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';

export default ({ white }) => {
    return (
        <header className={white ? 'white' : ''}>
            <div className="header-logo">
                <img src="https://www.pucrs.br/wp-content/themes/pucrs-responsivo/hotsites/tecnopuc-experience/img/logo-southsystem.png" />
            </div>
            <ul className='header-links'>
                <li className='header-links-li'><NavLink to='#'>Início</NavLink></li>
                <li className='header-links-li'><NavLink to='#'>Favoritos</NavLink></li>
                <li className='header-links-li'><NavLink to='#'>Recentes</NavLink></li>
            </ul>
        </header>
    )
}