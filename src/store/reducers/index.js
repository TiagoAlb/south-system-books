import { combineReducers } from 'redux'
import header from './header'
import book from './book'
import layout from './layout'

export default combineReducers({
    header,
    book,
    layout
})