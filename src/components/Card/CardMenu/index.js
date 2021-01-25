import React, { useState } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../../store/functions/book'
import Typography from '@material-ui/core/Typography'
import IconBtn from '../../IconBtn'
import { formatDate } from '../../../utils/date_time_functions'
import { decreaseText } from '../../../utils/web_functions'
import { card_menu } from '../../../lists/options'
import { saveFavorite, saveRecent } from '../../../utils/api_helper'
import './style.css'

const executeScroll = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const CardMenu = ({ item, changeSelectedBook, changeAlert }) => {
    const location = window.location.href
    const path = location.substring(location.lastIndexOf('/') + 1)

    function Options() {
        return (
            <div className='card-menu-content-options'>
                {card_menu.map((prop, key) => {
                    if (prop.name !== 'favorite') {
                        return (
                            <IconBtn
                                key={key}
                                icon={prop.icon}
                                title={prop.title}
                                click={() => (changeSelectedBook(item),
                                    saveRecent(item.id, item.volumeInfo.title),
                                    executeScroll())
                                } />
                        )
                    } else if (path !== 'favoritos')
                        return (
                            <IconBtn
                                key={key}
                                icon={prop.icon}
                                title={prop.title}
                                click={() => (
                                    saveFavorite(item.id, item.volumeInfo.title),
                                    changeAlert({ open: true, message: 'Livro adicionado aos favoritos.', severity: 'success' })
                                )} />
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
                        {item.volumeInfo.authors && item.volumeInfo.authors.length > 0 ?
                            item.volumeInfo.authors.map((prop, key) => (
                                key > 0 && key < 4 ? ', ' + prop : key < 4 ? prop : ''
                            )) : 'Autor não informado'}
                        {' - ' + formatDate(item.volumeInfo.publishedDate, 'DD/MM/YYYY')}
                    </Typography>
                </div>
                <Options />
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CardMenu)