import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'
import ChangingButtons from '../Components/ChangigButtons'

const Expense = ({name, sum, date, editButton, removeButton}) => {
    let dateObject = new Date(date);
    return (
        <Grid>
            <Row>
                <Col md={4}>
            <Panel>
                <ListGroup>
                <ListGroupItem> {name} </ListGroupItem>
                <ListGroupItem> {sum} рублей </ListGroupItem>
                <ListGroupItem> {dateObject.getDate()}/{(dateObject.getMonth() +1)}/{dateObject.getFullYear()} </ListGroupItem>
                </ListGroup>
                <ChangingButtons editButton={editButton} removeButton={removeButton}/>
            </Panel>
                </Col>
            </Row>
        </Grid>
    )
}

Expense.propTypes = {
    name: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired
}

export default Expense

