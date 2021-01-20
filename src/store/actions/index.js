import { cleanSearchSpaces } from '../../utils/web_functions'

export function changeSearch(value) {
    return {
        type: 'CHANGE_SEARCH',
        search: cleanSearchSpaces(value)
    }
}

export function changeSelectedBook(value) {
    return {
        type: 'CHANGE_SELECTED_BOOK',
        informations: value
    }
}

export function changeDevice(value) {
    return {
        type: 'CHANGE_DEVICE',
        mobile: value
    }
}

export function changeAlert(value) {
    return {
        type: 'CHANGE_ALERT',
        alert: value
    }
}
