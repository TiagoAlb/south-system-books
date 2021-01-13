import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

export const mapStateToProps = state => ({
    mobile: state.layout.mobile
})

export const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch)
