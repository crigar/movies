const initialState = {
    name: '',
    category: '',
    rating: '',
    year: ''
}

export const reducers = (state = initialState, action) => {
    const newState = {...state};
    if (action.type === 'SET_PARAM') {
        newState[action.filterPair.name] = action.filterPair.value; 
    }
    return newState;
}