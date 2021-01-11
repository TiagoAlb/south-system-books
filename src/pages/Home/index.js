import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { pagedList } from '../../services/Rest'
import BooksList from '../../components/BooksList'

const Home = ({ search }) => {
    const [books, setBooks] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [totalItems, setTotalItems] = useState(true)
    const list = useRef(null)

    const executeScroll = () => list.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' })

    const listBooks = () => {
        pagedList(search, page,
            (success) => {
                setLoading(false)
                setBooks(success.items)
                setTotalItems(success.totalItems)
            })
    }


    useEffect(() => {
        if (loading && search !== '')
            executeScroll()
    }, [loading]);

    useEffect(() => {
        listBooks()
    }, [page])


    useEffect(() => {
        setLoading(true)

        if (page > 0)
            setPage(0)
        else
            listBooks()
    }, [search])

    return (
        <div ref={list}>
            <BooksList
                title={search}
                items={books}
                page={page}
                loading={loading}
                nextPage={() => setPage(page + 1)}
                total={totalItems}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    search: state.header.search
})

export default connect(mapStateToProps)(Home)