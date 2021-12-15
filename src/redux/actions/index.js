export const NEW_FILTER = 'NEW_FILTER';
export const CLEAN_FILTER = 'CLEAN_FILTER';  

export const newFilter = (filter) => {
    return {
        type: NEW_FILTER,
        filter
    }
}
 
export const cleanFilter = () => {
    return {
        type: CLEAN_FILTER
    }
}