import React, { useState, useEffect } from 'react'
import { list } from '../../services/Rest'
import BooksList from '../../components/BooksList'

export default () => {
    const [books, setBooks] = useState([])

    function listBooks() {
        list((success) => {
            console.log(success.items)
            setBooks(success.items)
        }, (error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        (async () => {
            listBooks()
        })()
    }, [])
    return <BooksList items={books} />
}