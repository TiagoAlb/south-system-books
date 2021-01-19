import { saveFavorite, saveRecent } from '../../utils/api_helper'

it('works saving favorite', () => {
    localStorage.removeItem('south-system-books-favorites')
    saveFavorite('6Er0X4M7zmU', 'Stephen King')
    const favorites = localStorage.getItem('south-system-books-favorites')
    expect(JSON.parse(favorites)).toHaveLength(1)
    expect.assertions(1)
})

it('works saving recent', () => {
    localStorage.removeItem('south-system-books-recents')
    saveRecent('6Er0X4M7zmU', 'Stephen King')
    const recents = localStorage.getItem('south-system-books-recents')
    expect(JSON.parse(recents)).toHaveLength(1)
    expect.assertions(1)
})