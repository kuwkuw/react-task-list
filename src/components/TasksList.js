import React, { Component } from 'react'

import TaskItem from './TaskItem'
import EditableTaskItem from './EditableTaskItem'


class TasksList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editableElementIndex: null
    }
  }

  render() {
    const tasksList = this.props.todos.map((task, index) => {
      if (this.state.editableElementIndex !== index) {
        return <TaskItem
          key={index}
          task={task}
          onEditable={() => {
            this.setState(() => {
              return { editableElementIndex: index }
            })
          }}
          onTaskToggle={() => this.props.onTaskToggle(index)}
          onDelete={() => this.props.onDelete(index)}
        />
      } else {
        return <EditableTaskItem
          key={index}
          task={task}
          onCancel={() => {
            this.setState(() => {
              return { editableElementIndex: null }
            })
          }}
          onSave={(e) => {
            this.props.onSave(index, e, this.props.todos[index].isCompleted)
            this.setState(() => {
              return { editableElementIndex: null }
            })
          }}
        />
      }
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