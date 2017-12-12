import { connect } from 'react-redux'

import { removeTodo, toggleTodo, updateTodo } from '../store/actions'

import  TasksList from '../components/TasksList'

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTaskToggle: index => {
      dispatch(toggleTodo(index))
    },
    onDelete: index => {
      dispatch(removeTodo(index))
    },
    onSave: (index, title, state) => {
      dispatch(updateTodo(index, title, state))
    }
  }
}

const TasksListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList)

export default TasksListContainer;