import React, { Component } from 'react';
import AddNewExpense from './Containers/AddNewExpense'
import AddDateFilter from './Containers/AddDateFilter'
import SortingFilterContainer from './Containers/SortingFilterContainter'
import SortingButtons from './Containers/SortingButtons'
import GetSum from './Containers/GetSum'
import EditExpense from './Containers/EditExpense'
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
        <Grid>
            <Row md={9}>
                <Col md={4}>
                    <AddNewExpense/>
                </Col>
                <Col md={4}>
                    <SortingButtons/>
                </Col>
                <Col md={4}>
                    <AddDateFilter/>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                <SortingFilterContainer/>
                </Col>
                <Col md={4}>
                <GetSum/>
            </Col>
                <Col md={4}>
                    <EditExpense/>
                </Col>
            </Row>
        </Grid>

    );
  }
}

export default App;
