
const expenses = (state = [{name: "Ваза", sum: 700, date: 1528588800000, id: 2},
    {name: "Зонт", sum: 750, date: 1528156800000, id: 3},
    {name: "Мороженое", sum: 100, date: 1527811200000, id: 1},
    {name: "Кактус", sum: 800, date: 1527984000000, id: 4},
    {name: "Валенки", sum: 3000, date: 1528070400000, id: 5}
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
        return state.map(
                expense => expense.id === action.id ?      {
                        name: action.name,
                        sum: parseInt(action.sum),
                        date: newDateObject.getTime(),
                        id: action.id
                    }
                    : expense
            )

}
return state
}

export default expenses

