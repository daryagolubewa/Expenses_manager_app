import React, { Component } from 'react';
import AddNewExpense from './Containers/AddNewExpense'
import AddExpensesList from './Containers/AddExpensesList'
import './App.css';
import { Grid } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
        <Grid>
            <AddNewExpense/>
            <AddExpensesList/>
        </Grid>

    );
  }
}

export default App;
