import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '../Card'
import './style.css'

export default () => {
    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={2}>
                    <Card />
                </Grid>
                <Grid item xs={2}>
                    <Card />
                </Grid>
                <Grid item xs={2}>
                    <Card />
                </Grid>
                <Grid item xs={2}>
                    <Card />
                </Grid>
                <Grid item xs={2}>
                    <Card />
                </Grid>
                <Grid item xs={2}>
                    <Card />
                </Grid>
            </React.Fragment>
        )
    }

    return (
        <section className='books-list'>
            <h3>Livros</h3>
            <Grid container spacing={4}>
                <Grid container item xs={12} spacing={1}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <FormRow />
                </Grid>
            </Grid>
        </section>
    )
}