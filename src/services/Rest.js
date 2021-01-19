import api from './Api'
import { cleanUrlSearch } from '../utils/web_functions'

export async function get(id, success, error) {
    api.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(res => {
            if (res.status === 200) {
                success(res.data)
            } else {
                error(res)
            }
        }).catch(err => {
            error(handleCatchError(err))
        })
}

export async function list(search, success, error) {
    const searchValue = search !== '' ? search : 'stephen+king'
    api.get(`/volumes?q=${searchValue}`)
        .then(res => {
            if (res.status === 200) {
                success(res.data)
            } else {
                error(res)
            }
        }).catch(err => {
            error(handleCatchError(err))
        })
}

export async function pagedList(search, page, success, error) {
    const searchValue = search !== '' ? cleanUrlSearch(search) : 'stephen+king'
    api.get(`/volumes?q=${searchValue}&filter=partial&startIndex=${page}&maxResults=13`)
        .then(res => {
            if (res.status === 200) {
                success(res.data)
            } else {
                error(res)
            }
        }).catch(err => {
            error(handleCatchError(err))
        })
}

function handleCatchError(error) {
    if (error.response) {
        const err = error.response.data
        if (err.errors && err.errors.length > 0)
            return err.message + '\n' + err.errors[0]

        return err.message
    }
    return error.message
}