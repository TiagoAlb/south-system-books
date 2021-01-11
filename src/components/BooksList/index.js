import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Grid from '@material-ui/core/Grid'
import Card from '../Card'
import './style.css'
import Loading from '../Loading'

export default (props) => {
    const [hasMore, setHasMore] = useState(true)
    const [items, setItems] = useState([])

    useEffect(() => {
        if (props.page > 0) {
            props.items.map(item => {
                setItems(items => [...items, item])
            })
        } else {
            setItems(props.items)
        }
    }, [props.items])

    useEffect(() => {
        if (props.total > items.length) {
            setHasMore(true)
        } else {
            setHasMore(false)
        }
    }, [props.total])

    return (
        <section className='books-list'>
            <h3 id="title" className='books-list-title'>{props.title ?
                `${props.loading ? 'Pesquisando resultados ' : 'Resultados'} 
                    para "${props.title}"` : 'Livros'}</h3>
            {!props.loading ?
                <InfiniteScroll
                    dataLength={items.length}
                    next={props.nextPage}
                    hasMore={hasMore}
                    loader={<Loading />}
                    style={{ overflow: 'inherit' }}
                    endMessage={
                        <p>
                            {`${props.total} resultados carregados.`}
                        </p>
                    }
                >
                    <Grid container spacing={1}>
                        {items.map((prop, key) => (
                            prop.volumeInfo && prop.volumeInfo.imageLinks && prop.volumeInfo.description ?
                                <Grid item md={2} sm={3} xs={12} key={key}>
                                    <Card item={prop} />
                                </Grid>
                                : ''
                        ))}
                    </Grid>
                </InfiniteScroll>
                : <Loading />}
        </section>
    )
}