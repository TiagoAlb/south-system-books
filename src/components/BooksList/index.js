import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '../Card'
import './style.css'

export default () => {
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
            <Grid container spacing={4} className="books-list-container">
                <Grid container justify='center' item xs={12} spacing={1}>
                    <FormRow />
                </Grid>
                <Grid container justify='center' item xs={12} spacing={1}>
                    <FormRow />
                </Grid>
                <Grid container justify='center' item xs={12} spacing={1}>
                    <FormRow />
                </Grid>
            </Grid>
        </section>
    )
}