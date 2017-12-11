
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'

export const addTodo = (title) => {
    return {
        type: ADD_TODO,
        title: title
    }
}

export const removeTodo = (index) => {
    return {
        type: REMOVE_TODO,
        index: index
    }
}

export const toggleTodo = (index) => {
    return {
        type: TOGGLE_TODO,
        index: index
    }
}

export const updateTodo = (index, title, isCompleted) => {
    return {
        type: UPDATE_TODO,
        index,
        isCompleted,
        title
    }
}