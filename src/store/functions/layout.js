import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

export const mapStateToProps = state => ({
    mobile: state.layout.mobile,
    alert: state.layout.alert
})

export const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch)
