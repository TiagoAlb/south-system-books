import React from 'react'
import Typography from '@material-ui/core/Typography'
import './style.css'

export default ({ item }) => {
    return (
        <div className='card-menu'>
            <Typography variant='subtitle1' gutterBottom>
                {item.volumeInfo.title}
            </Typography>
        </div>
    )
}