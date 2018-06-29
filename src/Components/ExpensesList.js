import React from 'react'
import PropTypes from 'prop-types'
import Expense from '../Components/Expense'
import { Grid, Row, Col, Panel } from 'react-bootstrap'


const ExpensesList = ({ expenses, Edit, removeExpense}) => (
    <Grid>
    <Row>
        <Col md={8}>
            <Panel>
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
    </Row>
    </Grid>
)


export default ExpensesList