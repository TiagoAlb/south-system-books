const INITIAL_STATE = {
    book: null
}

export default function book(state = INITIAL_STATE, action) {
    if (action.type === 'CHANGE_SELECTED_BOOK') {
        return {
            ...state,
            informations: action.informations
        }
    }

    return state
}