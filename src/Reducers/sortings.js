import { SortingOptions } from '../Actions/Actions'

const sortings = (state = SortingOptions.DATE, action) => {
    switch (action.type) {
        case 'SET_SORTING':
            return action.sorting
        default:
            return state
    }
}

export default sortings