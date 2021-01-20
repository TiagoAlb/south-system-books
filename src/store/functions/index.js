import { bindActionCreators } from 'redux'
import * as Actions from '../../store/actions'

export const mapStateToProps = state => ({
    informations: state.book.informations,
    search: state.header.search,
    mobile: state.layout.mobile,
    alert: state.layout.alert
})

export const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})