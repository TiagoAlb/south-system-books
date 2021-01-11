import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '../../Tooltip'
import { formatDate } from '../../../utils/date_time_functions'
import { toNonEmptyValue } from '../../../utils/web_functions'
import { card_menu } from '../../../lists/options'
import './style.css'

function Options() {
    return (
        <div className='card-menu-content-options'>
            {card_menu.map((prop, key) => (
                <Fragment key={key}>
                    <Tooltip text={prop.hover}>
                        <IconButton>
                            {prop.icon}
                        </IconButton>
                    </Tooltip>
                </Fragment>
            ))}
        </div>
    )
}

export default ({ item }) => {
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