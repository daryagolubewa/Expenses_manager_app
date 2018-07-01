import React from "react"
import PropTypes from 'prop-types'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ChangingButtons = ({editButton, removeButton, expenseId}) => (
    <Grid>
        <Row>
            <Col xs={6} md={4}>
                <div>
                    <Link to={"/edit/" + expenseId} params={{ id: expenseId }}><Button bsStyle='success'>Редактировать</Button></Link>
                    <Button bsStyle='danger' onClick={removeButton}>Удалить</Button>
                </div>
            </Col>
        </Row>
    </Grid>
)



export default ChangingButtons