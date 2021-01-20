import { ActionTypes } from "redux-devtools"

const INITIAL_STATE = {
    mobile: window.innerWidth < 600 ? true : false,
    alert: { open: false, message: '', severity: 'error' }
}

export default function (state = INITIAL_STATE, action) {
    if (action.type === 'CHANGE_DEVICE') {
        return {
            ...state,
            mobile: action.mobile
        }
    }

    if (action.type === 'CHANGE_ALERT') {
        return {
            ...state,
            alert: action.alert
        }
    }

    return state
}