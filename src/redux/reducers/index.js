   
import { combineReducers } from 'redux'
import { NEW_FILTER, CLEAN_FILTER } from './../actions/index';

const initialState = {
    name: '',
    category: '',
    rating: '',
    year: ''
}

const setFilter = (state = initialState, action) => {
    const newState = {...state};
    if (action.type === NEW_FILTER) {
        newState[action.filter.type] = action.filter.value; 
    }
    if (action.type === CLEAN_FILTER) {
        newState.name = '';
        newState.category = '';
        newState.rating = '';
        newState.year = '';
    }
    return newState;
}

export const todoApp = combineReducers({
    setFilter
});