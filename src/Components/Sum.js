import React from 'react'
import {Grid, Row, Col, Panel} from 'react-bootstrap'

const Sum = ({totalSum}) => (
    <Grid>
        <Row>
            <Col md={4}>
                <Panel bsStyle='success'>
                    <Panel.Heading>Общая сумма</Panel.Heading>
                    <Panel.Body> {totalSum} рублей </Panel.Body>
                </Panel>
            </Col>
        </Row>
    </Grid>
)

export default Sum


