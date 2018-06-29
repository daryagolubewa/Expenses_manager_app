import React, { Component } from 'react';
import AddNewExpense from './Containers/AddNewExpense'
import AddDateFilter from './Containers/AddDateFilter'
import SortingFilterContainer from './Containers/SortingFilterContainter'
import SortingButtons from './Containers/SortingButtons'
import GetSum from './Containers/GetSum'
import './App.css';
import { Grid } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
        <div>
            <AddNewExpense/>
            <AddDateFilter/>
            <SortingButtons/>
            <SortingFilterContainer/>
            <GetSum />
        </div>

    );
  }
}

export default App;
