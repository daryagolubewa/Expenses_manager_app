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

const Filter = (state, filter) => {
    expenses.filter(chosenDate => {
        if( state !== null) {
            return chosenDate.date <= start || chosenDate.date >= end
        } else {
            return state
        }
    })
}

const mapStateToProps = state => ({
    expenses: Filter(getChosenExpenses(state.expenses, state.sortings)), state.filter)
})

const mapDispatchToProps = dispatch => ({
    removeExpense: id => dispatch(removeExpense(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpensesList)


