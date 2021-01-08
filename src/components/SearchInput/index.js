import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../store/actions'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import './style.css'

const SearchInput = ({ search, white, changeSearch }) => {
    return (
        <div className={'expandable-search ' + (white ? 'white' : '')}>
            <input
                className={'expandable-search-input ' + (white ? 'white' : '')}
                type="search"
                onChange={(e) => changeSearch(e.target.value)}
                placeholder="Pesquisar"
                value={search}
            />
            <IconButton aria-label="search" className={'expandable-search-button ' + (white ? 'white' : '')}>
                <SearchIcon fontSize="medium" className='expandable-search-icon' />
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