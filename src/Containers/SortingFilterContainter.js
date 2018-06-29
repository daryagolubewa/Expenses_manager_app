import { connect } from 'react-redux'
import ExpensesList from '../Components/ExpensesList'
import { SortingOptions } from '../Actions/Actions'
import { removeExpense } from '../Actions/Actions'
import expenses from "../Reducers/expenses"
import dateFilter from '../Reducers/filter'
import { setFilter } from '../Actions/Actions'


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

const Filter = (expenses, filter) => {
    if (filter) {
        return expenses.filter(expense => expense.date >= filter.start && expense.date <= filter.end)
    } else {
        return expenses
    }
}

const mapStateToProps = state => ({
    expenses: Filter(getChosenExpenses(state.expenses, state.sortings), state.dateFilter)
})

const mapDispatchToProps = dispatch => ({
    removeExpense: id => dispatch(removeExpense(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpensesList)


