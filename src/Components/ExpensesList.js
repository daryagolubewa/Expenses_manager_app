import React from 'react'
import PropTypes from 'prop-types'
import Expense from '../Components/Expense'
import { Grid, Row, Col, Panel } from 'react-bootstrap'


const ExpensesList = ({expenses, Edit, removeExpense}) => (
    <Col md={4}>
        <Panel bsStyle='info'>
            <Panel.Heading>
                <Panel.Title>Список расходов</Panel.Title>
            </Panel.Heading>
            {expenses.map(expense =>
                <Expense
                    key={expense.id}
                    {...expense}

                    removeButton={() => removeExpense(expense.id)}

                />
            )}
        </Panel>
    </Col>
)



export default ExpensesList