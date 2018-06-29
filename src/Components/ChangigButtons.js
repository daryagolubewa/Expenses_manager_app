import React from "react"
import PropTypes from 'prop-types'
import {Grid, Row, Col, Button} from 'react-bootstrap'

const ChangingButtons = ({editButton, removeButton}) => (
    <Grid>
        <Row>
            <Col>
                <div>
                    <Button onClick={editButton}>Редактировать</Button>
                    <Button onClick={removeButton}>Удалить</Button>
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