/**
 * action index
 */
let actionIndex = 0;

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
        id: actionIndex++,
        text
    };
};

export const toggleTodo = (id)=>{
    return {
        type: TOGGLE_TODO,
        id
    };
};

export const setVisibilityFilter = (filter)=>{
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    };
};
