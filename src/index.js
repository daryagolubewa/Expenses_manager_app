import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import combineReducers from './Reducers/index'
import Root from './Root'
import { loadState, saveState } from './localStorage'


const persistedState = loadState();
const store = createStore(combineReducers, persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
    render(
        <Root store={store} />,
        document.getElementById('root')
    )

store.subscribe(() => {
    saveState(store.getState())
})

