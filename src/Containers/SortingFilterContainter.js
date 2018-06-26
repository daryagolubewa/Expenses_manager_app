import { connect } from 'react-redux'
import SortingFilter from '../Components/SortingFilter'
import { SortingOptions } from '../Actions/Actions'

const getChosenExpenses = (expenses, sorting) => {
    switch (sorting) {
        case SortingOptions.DATE:
            return expenses
        case SortingOptions.SUM:
            return expenses
        default:
            throw new Error('Что-то пошло не так')
    }
}

const mapStateToProps = state => ({
    expenses: getChosenExpenses(state.expenses, state.SortingOptions)
})

​
export default connect(
    mapStateToProps
)(SortingFilter)
​