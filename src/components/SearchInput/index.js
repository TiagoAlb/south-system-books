import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import './style.css'

export default ({ white }) => {
    const [search, setSearch] = useState('')
    return (
        <div className={'expandable-search ' + (white ? 'white' : '')}>
            <input
                className={'expandable-search-input ' + (white ? 'white' : '')}
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Pesquisar"
                value={search}
            />
            <IconButton aria-label="search" className={'expandable-search-button ' + (white ? 'white' : '')}>
                <SearchIcon fontSize="medium" className='expandable-search-icon' />
            </IconButton>
        </div>
    )
}