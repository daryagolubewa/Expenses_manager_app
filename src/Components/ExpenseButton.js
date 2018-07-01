import React from 'react'
import { Link } from 'react-router-dom'
import { Button} from 'react-bootstrap'
import PropTypes from 'prop-types'


const ExpenseButton = ({addNewExpense}) => (
    <Link to='/add'><Button onClick={addNewExpense} bsStyle='info' bsSize='large' className='expenseButton'> Добавить расходы </Button></Link>
)


export default ExpenseButton

ExpenseButton.propTypes = {
    ExpenseButton: PropTypes.func.isRequired
}



