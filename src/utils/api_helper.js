export function findLink(item, option) {
    console.log(item)
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