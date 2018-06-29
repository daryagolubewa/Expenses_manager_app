import React from "react"
import PropTypes from 'prop-types'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ChangingButtons = ({editButton, removeButton}) => (
    <Grid>
        <Row>
            <Col>
                <div>
                    <Link to='/edit/:id'><Button bsStyle='success'>Редактировать</Button></Link>
                    <Button bsStyle='danger' onClick={removeButton}>Удалить</Button>
                </div>
            </Col>
        </Row>
    </Grid>
)

ChangingButtons.propTypes = {
    editButton: PropTypes.func.isRequired,
    removeButton: PropTypes.func.isRequired
}

export default ChangingButtons