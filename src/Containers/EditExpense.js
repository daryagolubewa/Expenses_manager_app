import React from 'react'
import { connect } from "react-redux"
import { editExpense } from "../Actions/Actions"
import { FormControl, Button, FormGroup, Form, Panel } from 'react-bootstrap'
import { Col } from 'react-bootstrap'


const EditExpense = ({ dispatch, history, match, name, sum, date}) => {
    let expenseName, expenseSum, expenseDate
    let dateObject = new Date(date)
    return(
        <Col md={4}>
            <Panel bsStyle='info' className='add'>
                <Panel.Heading>
                    <Panel.Title>Редактировать</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <Form horizontal
                          onSubmit={e => {
                              e.preventDefault()
                              if (!expenseName.value.trim() || !expenseSum.value.trim() || !expenseDate.value.trim()) {
                                  return
                              }

                              dispatch(editExpense(expenseName.value, expenseSum.value, expenseDate.value, match.params.id))
                              history.push('/')
                          }}
                    >
                        <FormGroup>
                            <FormControl componentClass="textarea" type='textarea' inputRef={node => expenseName = node}
                                         defaultValue={name}/>
                        </FormGroup>

                        <FormGroup>
                            <FormControl type='text' inputRef={node => expenseSum = node}  defaultValue={sum}/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="date" inputRef={node => expenseDate = node}  defaultValue={dateObject.toISOString().slice(0,10)}/>
                        </FormGroup>
                        <FormGroup>
                                <Button
                                    type='submit'>
                                    Сохранить
                                </Button>
                        </FormGroup>
                    </Form>
                </Panel.Body>
            </Panel>
        </Col>

    )
}

const mapStateToProps = (state, match) => ({
    ...state.expenses.find(expense => {
            return match.match.params.id === expense.id.toString()
        }
    )
})

export default connect(
    mapStateToProps
)(EditExpense)

