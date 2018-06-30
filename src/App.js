import React, { Component } from 'react';
import AddNewExpense from './Containers/AddNewExpense'
import AddDateFilter from './Containers/AddDateFilter'
import SortingFilterContainer from './Containers/SortingFilterContainter'
import SortingButtons from './Containers/SortingButtons'
import GetSum from './Containers/GetSum'
import EditExpense from './Containers/EditExpense'
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap'
import {Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Grid>
            <Row md={9}>
                    <Route path='/add' component={AddNewExpense}/>
                    <Route path='/' exact={true} component={SortingButtons}/>
                    <Route path='/' exact={true} component={AddDateFilter}/>
            </Row>
            <Row>
                <Route path='/' exact={true} component={SortingFilterContainer}/>
                <Route path='/' exact={true} component={GetSum}/>
                <Route path='/edit/:id'  component={EditExpense}/>
            </Row>
        </Grid>

    );
  }
}

export default App;

