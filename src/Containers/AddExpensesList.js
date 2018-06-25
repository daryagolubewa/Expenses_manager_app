import ExpensesList from '../Components/ExpensesList'
import { connect } from 'react-redux'
import { removeExpense } from '../Actions/Actions'

const mapStateToProps = state => ({
    expenses: state.expenses
})

const mapDispatchToProps = dispatch => ({
    removeExpense: id => dispatch(removeExpense(id))
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ExpensesList)














