import React from 'react'
import { connect } from 'react-redux'
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

const mapStateToProps = state => ({
    informations: state.book.informations
})

export default connect(mapStateToProps)(Outdoor)