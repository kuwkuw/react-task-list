import React, { Component } from 'react';

class TaskItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newTaskTitle: this.props.task.title
    }
  }

  render() {
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
        {unSelectedControls}
      </li>
    );
  }
}

export default TaskItem;