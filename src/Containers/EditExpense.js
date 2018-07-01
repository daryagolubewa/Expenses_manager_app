import React from 'react'
import { connect } from "react-redux"
import { editExpense } from "../Actions/Actions"
import { FormControl, Button, FormGroup, Form, Panel } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import {Route} from 'react-router-dom'

const EditExpense = ({ dispatch, history }) => {
    let name, sum, date
    return(
        <Col md={4}>
            <Panel bsStyle='primary'>
                <Panel.Body>
                    <Form horizontal
                          onSubmit={e => {
                              e.preventDefault()
                              if (!name.value.trim() || !sum.value.trim() || !date.value.trim()) {
                                  return
                              }

                              dispatch(editExpense(name.value, sum.value, date.value))
                              history.push('/')
                              name.value = '';
                              sum.value = '';
                              date.value = '';
                          }}
                    >

                        <Panel.Heading>
                            <Panel.Title>Редактировать</Panel.Title>
                        </Panel.Heading>
                        <FormGroup>
                            <FormControl componentClass="textarea" type='textarea' inputRef={node => name = node}
                                         placeholder=""/>
                        </FormGroup>

                        <FormGroup>
                            <FormControl type='text' inputRef={node => sum = node} placeholder=""/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="date" inputRef={node => date = node}/>
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

export default connect()(EditExpense)

