const INITIAL_STATE = {
    book: {}
}

export default function book(state = INITIAL_STATE, action) {
    if (action.type === 'CHANGE_SELECTED_BOOK') {
        return {
            ...state,
            book: action.search
        }
    }

    return state
}