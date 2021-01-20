import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../store/functions'
import Typography from '@material-ui/core/Typography'
import IconButton from '../IconButton'
import Card from '../Card'
import { openNewTab, decreaseText } from '../../utils/web_functions'
import { findLink, saveFavorite } from '../../utils/api_helper'
import { book_informations_menu } from '../../lists/options'
import './style.css'

const BookInformation = ({ informations, mobile, actions }) => {
    const Menu = () => {
        return <div className='book-information-content-details-menu'>
            {book_informations_menu.map((prop, key) => {
                const link = findLink(informations, prop.name)
                if (link) {
                    if (prop.name === 'download') {
                        return (
                            <a href={link} download={informations.volumeInfo.title + `-${informations.id}`}>
                                <IconButton
                                    key={key}
                                    icon={prop.icon}
                                    title={prop.title}
                                    click={() => (
                                        actions.changeAlert({ open: true, message: 'Baixando livro.', severity: 'success' }))}
                                />
                            </a>
                        )
                    } else return (
                        <IconButton
                            key={key}
                            icon={prop.icon}
                            title={prop.title}
                            click={() => openNewTab(link)}
                        />
                    )
                } else if (prop.name === 'close') {
                    return (
                        <IconButton
                            key={key}
                            icon={prop.icon}
                            title={prop.title}
                            click={() => actions.changeSelectedBook(null)}
                        />
                    )
                } else if (prop.name === 'favorite') {
                    return (
                        <IconButton
                            key={key}
                            icon={prop.icon}
                            title={prop.title}
                            click={() => (
                                saveFavorite(informations.id, informations.volumeInfo.title),
                                actions.changeAlert({ open: true, message: 'Livro adicionado aos favoritos.', severity: 'success' }))}
                        />
                    )
                }
            })}
        </div>
    }

    const Content = () => {
        return (
            <div className='book-information-content-details-content'>
                <Typography variant='h6'>
                    {informations.volumeInfo.title}
                </Typography>
                <Typography variant='body1'>
                    {decreaseText(informations.volumeInfo.description, 500)}
                </Typography>
            </div>
        )
    }

    return (
        <div className='book-information-content'>
            {informations ?
                <Fragment>
                    <div className='book-information-content-card'>
                        <Card noMenu item={informations} />
                    </div>
                    <div className='book-information-content-details'>
                        {!mobile ?
                            <Content />
                            : ''}
                        <Menu />
                        {mobile ?
                            <Content />
                            : ''}
                    </div>
                </Fragment>
                :
                <p className='frase'>
                    “Livros dão alma ao universo, asas para a mente, voo para a imaginação, e vida a tudo”. <br /><br /> – Platão
                </p>
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BookInformation)