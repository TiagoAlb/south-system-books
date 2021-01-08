import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '../Card'
import './style.css'

function getLines(total) {
    return Math.ceil(total / 5)
}

export default ({ items }) => {
    function FormRow() {
        return (
            <React.Fragment>
                <Grid item sm xs={12}>
                    <Card />
                </Grid>
                <Grid item sm xs={12}>
                    <Card />
                </Grid>
                <Grid item sm xs={12}>
                    <Card />
                </Grid>
                <Grid item sm xs={12}>
                    <Card />
                </Grid>
                <Grid item sm xs={12}>
                    <Card />
                </Grid>
            </React.Fragment>
        )
    }

    return (
        <section className='books-list'>
            <h3 className='books-list-title'>Livros</h3>
            <Grid container spacing={1} className='books-list-container'>
                {items ?
                    items.map((prop, key) => (
                        prop.volumeInfo.imageLinks ?
                            <Grid item md={2} sm={3} xs={12} key={key}>
                                <Card item={prop} />
                            </Grid>
                            : ''
                    ))
                    : ''}
            </Grid>
        </section>
    )
}