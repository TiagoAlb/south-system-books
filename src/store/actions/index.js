import { cleanSearchSpaces } from '../../utils/web_functions'

export function changeSearch(search) {
    return {
        type: 'CHANGE_SEARCH',
        search: cleanSearchSpaces(search)
    }
}