const INITIAL_STATE = {
    mobile: false
}

export default function (state = INITIAL_STATE, action) {
    if (action.type === 'CHANGE_DEVICE') {
        return {
            ...state,
            mobile: action.mobile
        }
    }

    return state
}