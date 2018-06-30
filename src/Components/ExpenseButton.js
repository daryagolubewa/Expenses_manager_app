import React from 'react'
import {Col, Button} from 'react-bootstrap'


const ExpenseButton = ({addNewExpense}) => (
    <Button onClick={addNewExpense}> Добавить расходы </Button>
)

export default ExpenseButton





