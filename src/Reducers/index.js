import { combineReducers } from 'redux'
import expenses from '../Reducers/expenses'

export default combineReducers({
    expenses,
    sortings,
    dateFilter
})