import { connect } from 'react-redux'
import EditExpense from '../Containers/EditExpense'

const mapStateToProps = (state, match) => ({
    ...state.expenses.find(expense => {
        return match.params.id === expense.id
        }
    )
})

export default connect(
    mapStateToProps
)(EditExpense)
