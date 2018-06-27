
const dateFilter = (state = null, action) => {
switch(action.type) {
    case 'SET_FILTER':
        return  {
            start: action.start,
            end: action.end
        }
    default: return state
}
}

export default dateFilter