import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TasksList extends Component {



  render() {
    const tasksList = this.props.tasks.map((task, index) => {
      return <TaskItem
        key={index}
        task={task}
        onEditable={() => this.props.onEditable(index)}
        onCancel={() => this.props.onCancel(index)}
        onSave={(e) => this.props.onSave(e, index)}
        onTaskComplete={() => this.props.onTaskComplete(index)} 
        onDelete={()=> this.props.onDelete(index)}/>
    });

    return (
      <div className="tasks-list">
        <h3>
          Tasks list
        </h3>
        <div className="tasks-list-container">
          {tasksList}
        </div>
      </div>
    );
  }
}

export default TasksList;