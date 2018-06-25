import React from 'react'
import PropTypes from 'prop-types'
import Expense from '../Components/Expense'
import { Grid, Row, Col, Panel } from 'react-bootstrap'
import {removeExpense} from '../Actions/Actions'

const ExpensesList = ({ expenses, Edit, removeExpense}) => (
    <Row>
        <Col md={8}>
            {expenses.map(expense =>
                <Expense
                    key={expense.id}
                    {...expense}
                    editButton={() => Edit(expense.id)}
                    removeButton={() => removeExpense(expense.id)}

                />
            )}
        </Col>
    </Row>
)


export default ExpensesList