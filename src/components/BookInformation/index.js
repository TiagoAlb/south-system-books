import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import IconButton from '../IconButton'
import Card from '../Card'
import { openNewTab, decreaseText } from '../../utils/web_functions'
import { findLink } from '../../utils/api_helper'
import { book_informations_menu } from '../../lists/options'
import './style.css'

const BookInformation = ({ informations }) => {
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
                                } else return ''
                            })}
                        </div>
                    </div>
                </Fragment>
                : ''}
        </div>
    )
}

const mapStateToProps = state => ({
    informations: state.book.informations
})

export default connect(mapStateToProps)(BookInformation)