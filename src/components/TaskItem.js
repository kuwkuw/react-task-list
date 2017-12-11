import React, { Component } from 'react';

class TaskItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newTaskTitle: this.props.task.title
    }
  }

  cancel() {
    this.setState((prevState, props) => {       
      this.props.onCancel()
      return {newTaskTitle: props.task.title}
    });
  }

  render() {
    const selectedControls = (
      <div className="row">
        <div className="col-md-9 col-xs-9">
          <input className="form-control" type="text" value={this.state.newTaskTitle} onChange={(e) => {
            this.setState({ newTaskTitle: e.target.value })
          }} />
        </div>
        <div className="col-md-3 col-xs-3">
          <div className="row">
            <div className="col-md-6 col-xs-6">
              <button className="btn btn-default" onClick={() => { this.props.onSave(this.state.newTaskTitle) }}>Save</button>
            </div>
            <div className="col-md-6 col-xs-6">
              <button className="btn btn-default" onClick={this.cancel.bind(this)}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );

    const unSelectedControls = (
      <div className="row">
        <div className="col-md-9 col-xs-9" onClick={this.props.onTaskComplete} >{this.props.task.title}</div>
        <div className="col-md-3 col-xs-3">
          <div className="row">
            <div className="col-md-6 col-xs-6">
              <button className="btn btn-default" onClick={this.props.onEditable}>Edit</button>
            </div>
            <div className="col-md-6 col-xs-6">
              <button className="btn btn-default" onClick={this.props.onDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>);

    return (
      <li className={this.props.task.isCompleted ? 'list-group-item completed' : 'list-group-item'}>
        {this.props.task.isEditable ? selectedControls : unSelectedControls}
      </li>
    );
  }
}

export default TaskItem;