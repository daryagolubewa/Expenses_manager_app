
const expenses = (state = [], action) => {
switch (action.type){
    case 'ADD_EXPENSE':
        return [
            ...state,
            {
                name: action.name,
                sum: action.sum,
                date: action.date,
                id: action.id
            }
        ]
}
return state
}

export default expenses
