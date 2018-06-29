import React from 'react'
import { connect } from "react-redux"
import { addExpense } from "../Actions/Actions"
import { FormControl, Button, FormGroup, Form, Grid, Row, Col, Panel } from 'react-bootstrap'

const AddExpense = ({ dispatch }) => {
    let name, sum, date
    return(
        <Grid>
        <Row>
            <Col md={4}>
                <Panel bsStyle='primary'>
                    <Panel.Body>
                        <Form horizontal
                              onSubmit={e => {
                                  e.preventDefault()
                                  if (!name.value.trim() || !sum.value.trim() || !date.value.trim()) {
                                      return
                                  }

                                  dispatch(addExpense(name.value, sum.value, date.value))
                                  name.value = '';
                                  sum.value = '';
                                  date.value = '';
                              }}
                        >

                            <Panel.Heading>
                                <Panel.Title>Внести расходы</Panel.Title>
                            </Panel.Heading>
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
                                <Button type="submit">
                                    Отправить
                                </Button>
                            </FormGroup>
                        </Form>
                    </Panel.Body>
                </Panel>
            </Col>
        </Row>
        </Grid>
    )
}

export default connect()(AddExpense)
