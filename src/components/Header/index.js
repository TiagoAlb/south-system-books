import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../routes'
import SearchInput from '../SearchInput'
import './style.css'

export default ({ white, reducedLogo }) => {
    return (
        <header className={white ? 'white' : ''}>
            <div className='header-logo'>
                <NavLink to='/'>
                    {reducedLogo ?
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnekSnuBNoPRRYQVO3AtWtk1D_zPsQWICAw&usqp=CAU' alt='Logo' />
                        : <img src='https://www.pucrs.br/wp-content/themes/pucrs-responsivo/hotsites/tecnopuc-experience/img/logo-southsystem.png' alt='Logo' />}
                </NavLink>
            </div>
            <SearchInput white={white} />
            <ul className='header-links'>
                {routes.map((prop, key) => (
                    <li className={`header-links-li ${key < 1 ? 'first' : ''}`} key={key}><NavLink to={prop.path}>{prop.name}</NavLink></li>
                ))}
            </ul>
        </header>
    )
}