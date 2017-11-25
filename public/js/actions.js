
/**
 * action types
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * other constants 
 */
export const VisibilityFilters = {
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/**
 * actions creators
 */

export const addTodo = (text)=>{
    return {
        type: ADD_TODO,
        text
    };
};

export const toggleTodo = (index)=>{
    return {
        type: TOGGLE_TODO,
        index
    };
};

export const setVisibilityFilter = (filter)=>{
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    };
};
