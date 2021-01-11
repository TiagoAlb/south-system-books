import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { get } from '../../services/Rest'
import { getFavorite } from '../../utils/api_helper'
import BooksList from '../../components/BooksList'

const Favorites = ({ search }) => {
    const [books, setBooks] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [totalItems, setTotalItems] = useState(true)
    const list = useRef(null)

    const executeScroll = () => list.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' })

    const listBooks = () => {
        let favorites = getFavorite()

        for (let i = 0; i < favorites.length; i++) {
            get(favorites[i],
                (success) => {
                    favorites.push(success)
                })
        }

        setLoading(false)
        setBooks(favorites)
        setTotalItems(favorites.length)
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
                title=''
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

export default connect(mapStateToProps)(Favorites)