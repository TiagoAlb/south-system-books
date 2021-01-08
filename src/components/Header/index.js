import React from 'react';
import { NavLink } from 'react-router-dom'
import routes from '../../routes';
import SearchInput from '../SearchInput';
import './style.css';

export default ({ white, reducedLogo }) => {
    return (
        <header className={white ? 'white' : ''}>
            <div className='header-logo'>
                {reducedLogo ?
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnekSnuBNoPRRYQVO3AtWtk1D_zPsQWICAw&usqp=CAU' />
                    : <img src='https://www.pucrs.br/wp-content/themes/pucrs-responsivo/hotsites/tecnopuc-experience/img/logo-southsystem.png' />}
            </div>
            <SearchInput white={white} />
            <ul className='header-links'>
                {routes.map((prop, key) => (
                    <li className='header-links-li'><NavLink to={prop.path}>{prop.name}</NavLink></li>
                ))}
            </ul>

        </header>
    )
}