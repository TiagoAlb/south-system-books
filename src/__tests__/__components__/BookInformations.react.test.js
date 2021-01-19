import React from 'react'
import { renderRedux, fireEvent, screen } from '../__reducer__/redux_utils'
import BookInformation from '../../components/BookInformation'

it('Renders the connected app with initialState', () => {
    const item = {
        id: 'HjURCQHV4wAC',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/HjURCQHV4wAC',
        volumeInfo: {
            title: 'Stephen King',
            authors: [
                'Harold Bloom'
            ],
            publishedDate: '2009',
            description: 'Test',
            imageLinks: {
                smallThumbnail: 'http://books.google.com/books/content?id=HjURCQHV4wAC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72VuJWB2pOZ-Qgi8tUx68rkybGfh92IKnsXC2qKouVE2h1LDfCUG19QKR0Qs2_jkEo55jHLPxcM70lS7r6v5XDfSzEocK0qQNdwDCGCS8WN1psAxh4chGbU5G5dRbL1LIzoUWp9&source=gbs_api',

            }
        },
        saleInfo: {
            saleability: 'NOT_FOR_SALE'
        },
        accessInfo: {
            pdf: {
                isAvailable: true
            },
            webReaderLink: 'http://play.google.com/books/reader?id=HjURCQHV4wAC&hl=&printsec=frontcover&source=gbs_api'
        }
    }

    renderRedux(<BookInformation />, { initialState: { book: { informations: item } } })
    expect(screen.getByText(/Stephen King/i)).toBeInTheDocument()
})