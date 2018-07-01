import React from 'react'
import { connect } from "react-redux"
import { addExpense } from "../Actions/Actions"
import { FormControl, Button, FormGroup, Form, Col, Panel } from 'react-bootstrap'
import { Route, Redirect, BrowserRouter } from 'react-router-dom'

const AddExpense = ({ dispatch, history }) => {
    let name, sum, date
    return(
        <Col xs={6} md={4}>
                <Panel bsStyle='info' className='add'>
                    <Panel.Heading>
                        <Panel.Title>Внести расходы</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Form horizontal
                              onSubmit={(e) => {
                                  e.preventDefault()
                                  if (!name.value.trim() || !sum.value.trim() || !date.value.trim()) {
                                      return
                                  }

                                  dispatch(addExpense(name.value, sum.value, date.value))
                                  history.push('/')
                                  name.value = '';
                                  sum.value = '';
                                  date.value = '';
                              }}
                        >
                            <FormGroup>
                                <FormControl componentClass="textarea"  type='textarea' inputRef={node => name = node} placeholder="Введите описание"/>
                            </FormGroup>

                            <FormGroup>
                                <FormControl type='text' inputRef={node => sum = node} placeholder="Введите сумму"/>
                            </FormGroup>
                            <FormGroup>
                                    <FormControl type="date" inputRef={node => date = node} />
                            </FormGroup>
                            <FormGroup>
                               < Button type='submit'>
                                Отправить
                            </Button>
                            </FormGroup>
                        </Form>
                    </Panel.Body>
                </Panel>
        </Col>

    )
}

export default connect()(AddExpense)

