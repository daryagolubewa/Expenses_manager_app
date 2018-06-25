import React from 'react'
import PropTypes from 'prop-types'
import Expense from '../Components/Expense'
import { Grid, Row, Col, Panel } from 'react-bootstrap'


const ExpensesList = ({ expenses, Edit, removeExpense}) => (
    <Row>
        <Col md={8}>
            {expenses.map(expense =>
                <Expense
                    key={expense.id}
                    {...expense}

                    removeButton={() => removeExpense(expense.id)}

                />
            )}
        </Col>
    </Row>
)


export default ExpensesList