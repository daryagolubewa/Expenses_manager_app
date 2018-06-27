import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import combineReducers from './Reducers/index'
import Root from './Root'

const store = createStore(combineReducers)


    render(
        <Root store={store} />,
        document.getElementById('root')
    )




