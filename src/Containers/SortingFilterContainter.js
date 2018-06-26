import { connect } from 'react-redux'
import ExpensesList from '../Components/ExpensesList'
import { SortingOptions } from '../Actions/Actions'

const getChosenExpenses = (expenses, sorting) => {
    switch (sorting) {
        case SortingOptions.DATE:
            return expenses.sort((a, b) => {
                if (a.date > b.date) return 1;
                else return -1;
            });
        case SortingOptions.SUM:
            return expenses.sort((a, b) => {
                if (a.sum > b.sum) return 1;
                else return -1;
            });
    }

}

const mapStateToProps = state => ({
    expenses: getChosenExpenses(state.expenses, state.sortings)
})

export default connect(
    mapStateToProps
)(ExpensesList)


