import { combineReducers } from 'redux'

import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, UPDATE_TODO } from './actions'

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { title: action.title, isCompleted: false }]
        case REMOVE_TODO:
            return state.filter((todo, index) => {
                return index !== action.index
            })
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return {
                        title: todo.title,
                        isCompleted: !todo.isCompleted
                    }
                }
                return todo
            })
        case UPDATE_TODO: 
            return state.map((todo, index) => {
                if(index === action.index){
                    return {
                        isCompleted: action.isCompleted,
                        title: action.title
                    }
                }
                return todo
            } )
        default:
            return state;
    }
}

const todoApp = combineReducers({ todos })

export default todoApp