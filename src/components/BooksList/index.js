import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Grid from '@material-ui/core/Grid'
import Card from '../Card'
import Loading from '../Loading'
import './style.css'

const BooksList = (props) => {
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
        if (props.total > props.items.length) {
            setHasMore(true)
        } else {
            setHasMore(false)
        }
    }, [props.items])

    return (
        <section className='books-list'>
            <h3 id="title" className='books-list-title'>{props.title ?
                `${props.loading ? 'Pesquisando resultados ' : 'Resultados'} 
                    para "${props.title}"` : props.menu ? props.menu : 'Livros'}</h3>
            {!props.loading ?
                <InfiniteScroll
                    dataLength={items.length}
                    next={props.nextPage}
                    hasMore={hasMore}
                    loader={<Loading />}
                    className='infinite-scroll'
                    style={{ overflow: 'inherit' }}
                    endMessage={
                        <p>
                            {`${props.total === 0 ? 'Nenhum livro encontrado.' : ''}`}
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

export default BooksList