import api from './Api'

export async function get(id, success, error) {
    api.get(`/${id}`)
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

export async function list(success, error) {
    api.get(`/volumes?q=rick+riordan&key=AIzaSyB3yxi_GM2cLQ8xk5GdyPQSScccXCBWP7A&page=3`)
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