import { connect } from 'react-redux'
import { editExpense } from '../Actions/Actions'
import EditExpense from '../Containers/EditExpense'

const mapStateToProps = state => ({
    expenses: state.expenses.find(expense => {
        return expense === expense.id
        }
    )
})

export default connect(
    mapStateToProps
)(EditExpense)
