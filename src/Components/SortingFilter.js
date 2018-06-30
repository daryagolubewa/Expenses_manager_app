import React from 'react'
import { setSorting } from '../Actions/Actions'
import {SortingOptions} from '../Actions/Actions'
import {Grid, Row, Col, Panel, ListGroup, ListGroupItem} from 'react-bootstrap'

const Sortings = ({setSorting}) => (
    <Col xs={6} md={4}>
    <Panel bsStyle='info'>
        <Panel.Heading>
            <Panel.Title>Отсортировать по:</Panel.Title>
        </Panel.Heading>
        <ListGroup>
            <ListGroupItem> <input type='radio' defaultChecked
                                   onClick={() => setSorting(SortingOptions.DATE)} name='option'/> Дате
            </ListGroupItem>
            <ListGroupItem> <input type='radio' onClick={() => setSorting(SortingOptions.SUM)}
                                   name='option'/> Сумме </ListGroupItem>
        </ListGroup>
    </Panel>
    </Col>


)

export default Sortings