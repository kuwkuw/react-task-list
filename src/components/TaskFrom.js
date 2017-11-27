import React, { Component } from 'react';

class TaskFrom extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
  }

  addTask(e) {
    e.preventDefault();
    if (!this.state.task) {
      return;
    }
    this.props.onTaskAdd(this.state.task);
    this.setState({ 'task': '' });
  }

  handleChange(e) {
    this.setState({ 'task': e.target.value });
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.addTask.bind(this)}>        
        <div className="form-group">
          <input className="form-control" type="text" value={this.state.task} placeholder="My next task" onChange={this.handleChange.bind(this)} />
        </div>
        <div className="form-group">
          <button className="form-control btn btn-default" >Add</button>
        </div>
      </form>

    );
  }
}

export default TaskFrom;