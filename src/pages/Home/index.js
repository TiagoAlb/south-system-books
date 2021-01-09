import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { pagedList } from '../../services/Rest'
import BooksList from '../../components/BooksList'

const Home = ({ search }) => {
    const [books, setBooks] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [totalItems, setTotalItems] = useState(true)

    const listBooks = () => {
        pagedList(search, page,
            (success) => {
                setLoading(false)
                setBooks(success.items)
                setTotalItems(success.totalItems)
            })
    }

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

    return <BooksList
        title={search}
        items={books}
        page={page}
        loading={loading}
        nextPage={() => setPage(page + 1)}
        total={totalItems}
    />
}

const mapStateToProps = state => ({
    search: state.search
})

export default connect(mapStateToProps)(Home)