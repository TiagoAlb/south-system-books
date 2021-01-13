const INITIAL_STATE = {
    search: ''
}

export default function (state = INITIAL_STATE, action) {
    if (action.type === 'CHANGE_SEARCH') {
        return {
            ...state,
            search: action.search
        }
    }

    return state
}