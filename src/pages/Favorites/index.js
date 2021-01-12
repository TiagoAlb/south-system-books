import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { get } from '../../services/Rest'
import { getFavorite } from '../../utils/api_helper'
import BooksList from '../../components/BooksList'

const Favorites = ({ search }) => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalItems, setTotalItems] = useState(true)
    const list = useRef(null)

    const executeScroll = () => list.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' })

    const listBooks = () => {
        const favorites = getFavorite()
        let items = []


        for (let i = 0; i < favorites.length; i++) {
            get(favorites[i].id,
                (success) => {
                    setTotalItems(items.push(success))
                    setBooks(items)
                    console.log(items)

                })
        }
        console.log('para loading')
        setLoading(false)
    }

    useEffect(() => {
        if (loading && search !== '')
            executeScroll()
    }, [loading]);

    useEffect(() => {
        setLoading(true)
        setTotalItems(0)
        setBooks([])
        listBooks()
    }, [search])

    return (
        <div ref={list}>
            <BooksList
                title=''
                items={books}
                page={0}
                loading={loading}
                total={totalItems}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    search: state.header.search
})

export default connect(mapStateToProps)(Favorites)