
const dateFilter = (state = null, action) => {
switch(action.type) {
    case 'SET_FILTER':
        return  {
            start: action.filter.start,
            end: action.filter.end
        }
    default: return state
}
}

export default dateFilter