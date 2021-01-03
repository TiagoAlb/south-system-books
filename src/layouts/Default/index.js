import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from '../../components/Header'
import Outdoor from '../../components/Outdoor'

export default () => {
    return (
        <div className='content'>
            <Header white />
            <Outdoor />
            <main>

            </main>
        </div>
    )
}