import React from 'react'
import {Panel} from 'react-bootstrap'

const Sum = ({totalSum}) => (
    <Panel>
        <Panel.Heading>Общая сумма</Panel.Heading>
        <Panel.Body> {totalSum} </Panel.Body>
    </Panel>
)

export default Sum