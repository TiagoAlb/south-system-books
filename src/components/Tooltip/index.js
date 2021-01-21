import React from 'react'
import './style.css'

const Tooltip = (props) => {
    return (
        <div className='tooltip'>
            {props.children}
            <span className='tooltip-text'>{props.text}</span>
        </div>
    )
}

export default Tooltip