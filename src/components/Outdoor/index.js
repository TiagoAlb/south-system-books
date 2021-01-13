import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../store/functions/book'
import './style.css'

const Outdoor = ({ informations }) => {
    return (
        <section id='outdoor'>
            {informations ?
                <div className='vertical-gradient' />
                : ''}
            <div className='bottom-gradient' />
        </section>
    )
}

export default connect(mapStateToProps)(Outdoor)