import React from 'react'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '../Tooltip'
import './style.css'

export default (props) => {
    return (
        <Tooltip text={props.title}>
            <IconButton onClick={props.click}>
                <Icon>{props.icon}</Icon>
            </IconButton>
        </Tooltip>
    )
}