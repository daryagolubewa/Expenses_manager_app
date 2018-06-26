import { combineReducers } from 'redux'
import expenses from '../Reducers/expenses'
import sortings from '../Reducers/sortings'
import dateFilter from '../Reducers/filter'

export default combineReducers({
    expenses,
    sortings,
    dateFilter
})