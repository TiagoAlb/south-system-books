
import moment from 'moment'

export function formatDate(value, mask) {
    return moment(value).format(mask)
}