import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../store/functions'
import { get } from '../../services/Rest'
import { getFavorites, filterArray } from '../../utils/api_helper'
import BooksList from '../../components/BooksList'

const Favorites = ({ search, actions }) => {
    console.log('veio favoritos')

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalItems, setTotalItems] = useState(true)
    const list = useRef(null)

    const executeScroll = () => list.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' })

    const listBooks = () => {
        const favorites = search !== '' ? filterArray(getFavorites(), search) : getFavorites()
        let items = []

        console.log('favoritos')

        console.log(items)

        for (let i = 0; i < favorites.length; i++) {
            get(favorites[i].id,
                (success) => {
                    setTotalItems(items.push(success))
                    setBooks(items)
                })
        }
        setLoading(false)
    }

    useEffect(() => {
        actions.changeSearch('')
        actions.changeSelectedBook(null)
    }, [])

    useEffect(() => {
        if (loading)
            executeScroll()
    }, [loading])

    useEffect(() => {
        setLoading(true)
        setTotalItems(0)
        setBooks([])
        listBooks()
    }, [search])

    return (
        <div ref={list}>
            <BooksList
                title={search}
                menu='Favoritos'
                items={books}
                page={0}
                loading={loading}
                total={totalItems}
            />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)