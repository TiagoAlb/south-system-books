import React from 'react'
import './style.css'

export default (props) => {
    return (
        <div className='tooltip'>
            {props.children}
            <span className='tooltip-text'>{props.text}</span>
        </div>
    )
}