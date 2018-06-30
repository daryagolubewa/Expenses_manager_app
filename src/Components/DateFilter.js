import React from 'react'
import { setFilter } from '../Actions/Actions'
import {Grid, Row, Col, Panel, ListGroup, ListGroupItem, Button, FormGroup, FormControl} from 'react-bootstrap'

const DateFilter = ({filter, setFilter}) => {
    let start, end
    return (
        <Col md={4}>
            <Panel bsStyle='info'>
                <Panel.Heading>
                    <Panel.Title>Выберите диапазон дат</Panel.Title>
                </Panel.Heading>
                <ListGroup>
                    <ListGroupItem>
                        <label for="start">Начало</label>
                        <FormGroup>
                            <FormControl type="date" inputRef={node => start = node}/>
                        </FormGroup>
                    </ListGroupItem>

                    <ListGroupItem>
                        <label for="end">Конец</label>
                        <FormGroup>
                            <FormControl type="date" inputRef={node => end = node}/>
                        </FormGroup>
                    </ListGroupItem>
                </ListGroup>


                <Button onClick={() => {
                    if (!start.value.trim() || !end.value.trim()) {
                        return
                    }
                    let startDate = new Date(start.value);
                    let endDate = new Date(end.value);

                    setFilter({
                        start: startDate.getTime(),
                        end: endDate.getTime()
                    })

                }}
                >Сохранить
                </Button>
            </Panel>
        </Col>
    )
}

export default DateFilter
