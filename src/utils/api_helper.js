export function findLink(item, option) {
    switch (option) {
        case 'informations':
            return item.volumeInfo.infoLink ? item.volumeInfo.infoLink : null
        case 'read':
            return item.accessInfo.pdf.isAvailable ? item.accessInfo.webReaderLink : null
        case 'buy':
            return item.saleInfo.buyLink ? item.saleInfo.buyLink : null
        default:
            return null
    }
}

export function saveFavorite(id, title) {
    const favorites = localStorage.getItem('south-system-books-favorites')
    const book = { id: id, title: title }

    if (favorites) {
        const arr = JSON.parse(favorites)

        if (!verifyIfObjectExists(arr, book)) {
            arr.push(book)
        }
        localStorage.setItem('south-system-books-favorites', JSON.stringify(arr))
    } else {
        localStorage.setItem('south-system-books-favorites', JSON.stringify([book]))
    }
}

export function saveRecent(id, title) {
    const recents = localStorage.getItem('south-system-books-recents')
    const book = { id: id, title: title }

    if (recents) {
        const arr = JSON.parse(recents)

        if (!verifyIfObjectExists(arr, book)) {
            arr.push(book)
        }
        localStorage.setItem('south-system-books-recents', JSON.stringify(arr))
    } else {
        localStorage.setItem('south-system-books-recents', JSON.stringify([book]))
    }
}

export function getFavorites() {
    const favorites = localStorage.getItem('south-system-books-favorites')

    if (favorites) {
        return JSON.parse(favorites)
    }

    return []
}

export function getRecents() {
    const recents = localStorage.getItem('south-system-books-recents')

    if (recents) {
        return JSON.parse(recents)
    }

    return []
}

export function verifyIfObjectExists(items, obj) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === obj.id)
            return true
    }

    return false
}

export function filterArray(arr, filter) {
    const newArray = arr.filter((obj) => (
        obj.title.includes(filter)
    ))

    console.log('aqui array')
    console.log(newArray)
    return newArray
}