import React from 'react'
import PropTypes from 'prop-types'
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap'

const Expense = ({name, sum, date}) => (
    <div>
        <Panel>
            <Panel.Body> {name} </Panel.Body>
            <ListGroup>
                <ListGroupItem> {sum} </ListGroupItem>
                <ListGroupItem> {date} </ListGroupItem>
            </ListGroup>
            <button> Отправить </button>
        </Panel>

    </div>
)

Expense.propTypes = {
    name: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired
}

export default Expense


