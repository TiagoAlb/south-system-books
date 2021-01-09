import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../store/actions'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import './style.css'

const SearchInput = ({ white, changeSearch }) => {
    const [searchValue, setSearchValue] = useState('')

    const keyPress = (e) => {
        if (e.keyCode == 13) {
            changeSearch(searchValue)
        }
    }

    return (
        <div className={'expandable-search ' + (white ? 'white' : '')}>
            <input
                className={'expandable-search-input ' + (white ? 'white' : '')}
                type="search"
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyUp={(e) => keyPress(e)}
                placeholder="Pesquisar"
                value={searchValue}
            />
            <IconButton
                aria-label="search"
                className={'expandable-search-button ' + (white ? 'white' : '')}
                onClick={() => changeSearch(searchValue)}
            >
                <SearchIcon
                    fontSize="medium"
                    className='expandable-search-icon'
                />
            </IconButton>
        </div>
    )
}

const mapStateToProps = state => ({
    search: state.search
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)