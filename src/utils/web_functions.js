export function cleanUrlSearch(value) {
    return value.replace(/  +/g, ' ').replaceAll(' ', '+')
}

export function cleanSearchSpaces(value) {
    return value.replace(/  +/g, ' ')
}

export function toNonEmptyValue(value, message) {
    if (!value || value === '')
        return message

    return value
}

export function decreaseText(value, length) {
    if (value.length > length - 3)
        return value.substring(0, length - 3) + '...'

    return value
}