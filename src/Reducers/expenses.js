
const expenses = (state = [], action) => {
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
}
return state
}

export default expenses
