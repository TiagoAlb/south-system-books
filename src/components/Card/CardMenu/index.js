import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../../store/functions/book'
import Typography from '@material-ui/core/Typography'
import IconButton from '../../IconButton'
import { formatDate } from '../../../utils/date_time_functions'
import { toNonEmptyValue, decreaseText } from '../../../utils/web_functions'
import { card_menu } from '../../../lists/options'
import { saveFavorite, saveRecent } from '../../../utils/api_helper'
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
                                click={() => (changeSelectedBook(item),
                                    saveRecent(item.id, item.volumeInfo.title),
                                    executeScroll())
                                } />
                        )
                    } else return (
                        <IconButton
                            key={key}
                            icon={prop.icon}
                            title={prop.title}
                            click={() => (saveFavorite(item.id, item.volumeInfo.title), alert('Livro adicionado aos favoritos.'))} />
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
                        {decreaseText(item.volumeInfo.title, 50)}
                    </Typography>
                    <Typography variant='caption' gutterBottom>
                        {decreaseText(toNonEmptyValue(item.volumeInfo.authors, 'Autor não informado'), 50) + ' - '}
                        {formatDate(item.volumeInfo.publishedDate, 'DD/MM/YYYY')}
                    </Typography>
                </div>
                <Options />
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CardMenu)