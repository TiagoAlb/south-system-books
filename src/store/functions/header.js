import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

export const mapStateToProps = state => ({
    search: state.header.search
})

export const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch)