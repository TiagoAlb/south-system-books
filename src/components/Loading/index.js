import React from 'react'
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'
import './style.css'

function Items() {
    let items = [];
    for (var i = 0; i < 10; i++) {
        items.push(<Skeleton key={i} />)
    }

    return items
}

const Loading = () => {
    return (
        <div className='loading'>
            <div className='loading-items'>
                <Items />
            </div>
        </div>
    )
}

export default Loading