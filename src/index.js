import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import combineReducers from './Reducers/index'
import Root from './Root'

const store = createStore(combineReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
    render(
        <Root store={store} />,
        document.getElementById('root')
    )




