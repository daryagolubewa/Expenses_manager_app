import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Row, Col, Panel} from 'react-bootstrap'

const Sum = ({totalSum}) => (
    <Col xs={6} md={4}>
        <Panel bsStyle='success'>
            <Panel.Heading>Общая сумма</Panel.Heading>
            <Panel.Body> {totalSum} рублей </Panel.Body>
        </Panel>
    </Col>
)



export default Sum


