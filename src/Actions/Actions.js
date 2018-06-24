
let expenseId = 0;
export const addExpense = (name, sum, date) => ({
    type: 'ADD_EXPENSE',
    name,
    sum,
    date,
    id: expenseId++
})

export const setOptions = option => ({
    type: 'CHOOSE_OPTION',
    option
})

export const Options = {
    OPTION_DATE: 'OPTION_DATE',
    OPTION_SUM: 'OPTION_SUM'

}