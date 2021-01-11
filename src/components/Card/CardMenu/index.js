import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../store/actions'
import Typography from '@material-ui/core/Typography'
import IconButton from '../../IconButton'
import { formatDate } from '../../../utils/date_time_functions'
import { toNonEmptyValue } from '../../../utils/web_functions'
import { card_menu } from '../../../lists/options'
import { saveFavorite } from '../../../utils/api_helper'
import './style.css'

const executeScroll = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const CardMenu = ({ item, changeSelectedBook }) => {
    function Options() {
        return (
            <div className='card-menu-content-options'>
                {card_menu.map((prop, key) => {
                    if (prop.name !== 'favorite') {
                        return (
                            <IconButton
                                key={key}
                                icon={prop.icon}
                                title={prop.title}
                                click={() => (changeSelectedBook(item), executeScroll())} />
                        )
                    } else return (
                        <IconButton
                            key={key}
                            icon={prop.icon}
                            title={prop.title}
                            click={() => (saveFavorite(item.id), alert('Livro adicionado aos favoritos.'))} />
                    )
                })}
            </div>
        )
    }

    return (
        <div className='card-menu'>
            <div className='card-menu-content'>
                <div className='card-menu-content-header'>
                    <Typography variant='subtitle2'>
                        {item.volumeInfo.title}
                    </Typography>
                    <Typography variant='caption' gutterBottom>
                        {toNonEmptyValue(item.volumeInfo.authors, 'Autor não informado') + ' - '}
                        {formatDate(item.volumeInfo.publishedDate, 'DD/MM/YYYY')}
                    </Typography>
                </div>
                <Options />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    informations: state.book.informations
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CardMenu)