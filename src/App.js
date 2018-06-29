import React, { Component } from 'react';
import AddNewExpense from './Containers/AddNewExpense'
import AddDateFilter from './Containers/AddDateFilter'
import SortingFilterContainer from './Containers/SortingFilterContainter'
import SortingButtons from './Containers/SortingButtons'
import GetSum from './Containers/GetSum'
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
        <Grid>
            <Row>
                <Col>
                    <AddNewExpense/>
                </Col>
                <Col>
                    <SortingButtons/>
                </Col>
                <Col>
                    <AddDateFilter/>
                </Col>
            </Row>
            <Row>
                <Col>
                <SortingFilterContainer/>
                <GetSum/>
            </Col>
            </Row>
        </Grid>

    );
  }
}

export default App;
