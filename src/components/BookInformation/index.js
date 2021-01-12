import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../store/actions'
import Typography from '@material-ui/core/Typography'
import IconButton from '../IconButton'
import Card from '../Card'
import { openNewTab, decreaseText } from '../../utils/web_functions'
import { findLink, saveFavorite } from '../../utils/api_helper'
import { book_informations_menu } from '../../lists/options'
import './style.css'

const BookInformation = ({ informations, changeSelectedBook }) => {
    return (
        <div className='book-information-content'>
            {informations ?
                <Fragment>
                    <div className='book-information-content-card'>
                        <Card noMenu item={informations} />
                    </div>
                    <div className='book-information-content-details'>
                        <Typography variant='h6'>
                            {informations.volumeInfo.title}
                        </Typography>
                        <Typography variant='body1'>
                            {decreaseText(informations.volumeInfo.description, 500)}
                        </Typography>
                        <div className='book-information-content-details-menu'>
                            {book_informations_menu.map((prop, key) => {
                                const link = findLink(informations, prop.name)
                                if (link) {
                                    return (
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
                                            click={() => changeSelectedBook(null)}
                                        />
                                    )
                                } else if (prop.name === 'favorite') {
                                    return (
                                        <IconButton
                                            key={key}
                                            icon={prop.icon}
                                            title={prop.title}
                                            click={() => (saveFavorite(informations.id, informations.volumeInfo.title), alert('Livro adicionado aos favoritos.'))}
                                        />
                                    )
                                }
                            })}
                        </div>
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

const mapStateToProps = state => ({
    informations: state.book.informations
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BookInformation)