import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

export const mapStateToProps = state => ({
    informations: state.book.informations
})

export const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch)
