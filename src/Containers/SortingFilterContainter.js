import { connect } from 'react-redux'
import ExpensesList from '../Components/ExpensesList'
import { SortingOptions } from '../Actions/Actions'
import { removeExpense } from '../Actions/Actions'

const getChosenExpenses = (expenses, sorting) => {
    switch (sorting) {
        case SortingOptions.DATE:
            return expenses.slice().sort(
                (a, b) => (a.date - b.date)
            );
        case SortingOptions.SUM:
            return expenses.slice().sort(
                (a, b) => (a.sum - b.sum)
            );
    }
}

const mapStateToProps = state => ({
    expenses: getChosenExpenses(state.expenses, state.sortings)
})

const mapDispatchToProps = dispatch => ({
    removeExpense: id => dispatch(removeExpense(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpensesList)


