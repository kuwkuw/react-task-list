import React, { Component } from 'react';
import { addTodo } from '../store/actions'

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '', titleInvalid: false, invalidMsg: '' };
  }

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
    this.props.store.dispatch(addTodo(this.state.task))
    this.setState({ 'task': '', titleInvalid: false });
  }

  handleChange(e) {
    this.setState({ 'task': e.target.value });
  }

  checkExistingTask(newTask) {
    return this.props
      .store
      .getState()
      .todos
      .filter(task => newTask.toLocaleLowerCase() === task.title.toLocaleLowerCase())
      .length;
  }

  render() {
    const validationError = (this.state.titleInvalid ? <div className="error">Task title can't {this.state.invalidMsg}</div> : null)
    return (
      <form className="form-inline" onSubmit={this.addTask.bind(this)}>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="My next task"
            value={this.state.task}
            onChange={this.handleChange.bind(this)} />
        </div>
        <div className="form-group">
          <button className="form-control btn btn-default" >Add</button>
        </div >
        <div className="invalid">
          {validationError}
        </div>
      </form>

    );
  }
}

export default TaskForm;