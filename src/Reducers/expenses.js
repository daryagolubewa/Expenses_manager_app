
const expenses = (state = [{name: "10", sum: 10, date: 1528588800000, id: 2},
    {name: "50", sum: 50, date: 1528156800000, id: 3},
    {name: "100", sum: 100, date: 1527811200000, id: 1},
    {name: "200", sum: 200, date: 1527984000000, id: 4},
    {name: "300", sum: 300, date: 1528070400000, id: 5}
    ], action) => {
switch (action.type){
    case 'ADD_EXPENSE':
        let dateObject = new Date(action.date);
        return [
            ...state,
            {
                name: action.name,
                sum: parseInt(action.sum),
                date: dateObject.getTime(),
                id: action.id
            }
        ]
    case 'REMOVE_EXPENSE':
        return state.filter(expense =>
            (expense.id !== action.id)
        )
    case 'EDIT_EXPENSE':
        let newDateObject = new Date(action.date);
        return {
            state: state.map(
                expense => expense.id === action.id ?      {
                        name: action.name,
                        sum: parseInt(action.sum),
                        date: newDateObject.getTime(),
                        id: action.id
                    }
                    : expense
            )
        }
}
return state
}

export default expenses

