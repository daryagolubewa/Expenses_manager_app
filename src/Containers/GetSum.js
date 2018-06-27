import React from 'react'
import { connect } from 'react-redux'
import Sum from '../Components/Sum'

const mapStateToProps = state => ({
    totalSum: state.expenses.reduce((sum, current) => {
        return sum + current.sum
}, 0)
})


export default connect (
    mapStateToProps
)(Sum)