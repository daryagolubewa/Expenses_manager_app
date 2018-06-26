import React, { Component } from 'react';
import AddNewExpense from './Containers/AddNewExpense'
import AddExpensesList from './Containers/AddExpensesList'
import SortingFilterContainer from './Containers/SortingFilterContainter'
import SortingButtons from './Containers/SortingButtons'
import './App.css';
import { Grid } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
        <Grid>
            <AddNewExpense/>
            <AddExpensesList/>
            <SortingButtons/>
            <SortingFilterContainer/>
        </Grid>

    );
  }
}

export default App;
