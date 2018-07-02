import React from 'react'
import { connect } from 'react-redux'
import Sum from '../Components/Sum'
import Filter from '../Containers/Filter'

const mapStateToProps = state => ({
    totalSum: Filter(state.expenses, state.dateFilter).reduce((sum, current) => {
        return sum + current.sum
}, 0)
})


export default connect (
    mapStateToProps
)(Sum)

