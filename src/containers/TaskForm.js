import { connect } from 'react-redux'

import { addTodo } from '../store/actions'
import TaskForm from '../components/TaskForm'


const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask(e) {
      e.preventDefault();
      if (!this.state.task) {
        this.setState({ titleInvalid: true, invalidMsg: 'by is empty' });
        return;
      }
      if (this.checkExistingTask(this.state.task)) {
        this.setState({ titleInvalid: true, invalidMsg: 'repeat' });
        return;
      }
      dispatch(addTodo(this.state.task))
      this.setState({ 'task': '', titleInvalid: false });
    }
  }
}

const TaskFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm)

export default TaskFormContainer;