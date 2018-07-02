import React from 'react'

const Filter = (expenses, filter) => {
    if (filter) {
        return expenses.filter(expense => expense.date >= filter.start && expense.date <= filter.end)
    } else {
        return expenses
    }
}

export default Filter