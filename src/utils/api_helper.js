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

export function saveFavorite(id) {
    const favorites = localStorage.getItem('south-system-books-favorites')

    if (favorites) {
        const arr = JSON.parse(favorites)

        if (!arr.includes(id)) {
            arr.push(id)
        }
        localStorage.setItem('south-system-books-favorites', JSON.stringify(arr))
    } else {
        localStorage.setItem('south-system-books-favorites', JSON.stringify([id]))
    }
}

export function getFavorite() {
    const favorites = localStorage.getItem('south-system-books-favorites')

    if (favorites) {
        return JSON.parse(favorites)
    }

    return []
}