import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'

const Expense = ({name, sum, date}) => {
    let dateObject = new Date(date);
    return (
        <Grid>
            <Row>
                <Col>
            <Panel>
                <Panel.Body> {name} </Panel.Body>
                <Panel.Body> {sum} </Panel.Body>
                <Panel.Body> {dateObject.getDate()}.{(dateObject.getMonth() +1)}.{dateObject.getFullYear()} </Panel.Body>
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


