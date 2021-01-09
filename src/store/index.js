import { createStore } from 'redux'

const INITIAL_STATE = {
    search: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'CHANGE_SEARCH' && action.search !== '') {
        return {
            ...state,
            search: action.search
        }
    }

    return state
}

const store = createStore(reducer)

export default store