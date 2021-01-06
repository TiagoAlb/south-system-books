import React from 'react';
import { NavLink } from 'react-router-dom'
import routes from '../../routes';
import './style.css';

export default ({ white }) => {
    return (
        <header className={white ? 'white' : ''}>
            <div className="header-logo">
                <img src="https://www.pucrs.br/wp-content/themes/pucrs-responsivo/hotsites/tecnopuc-experience/img/logo-southsystem.png" />
            </div>
            <ul className='header-links'>
                {routes.map((prop, key) => (
                    <li className='header-links-li'><NavLink to={prop.path}>{prop.name}</NavLink></li>
                ))}
            </ul>
        </header>
    )
}