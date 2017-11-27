import React, { Component } from 'react';
import TasksList from './components/TasksList';
import TaskFrom from './components/TaskFrom';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { tasks: [] }
  }

  addTask(task) {
    this.setState((prevSate, props) => {
      prevSate.tasks.push({ title: task, isCompleted: false, isEditable: false });
      return {
        tasks: prevSate.tasks
      };
    })
  }

  setEditable(index) {
    this.setState(prevSate => {
      prevSate.tasks.forEach(task => { task.isEditable = false });
      prevSate.tasks[index].isEditable = true;
      return { tasks: prevSate.tasks }
    });
  }

  cancel(index) {
    this.setState(prevSate => {
      prevSate.tasks[index].isEditable = false;
      return { tasks: prevSate.tasks }
    });
  }

  updateTask(newTaskTitle, index) {
    this.setState(prevSate => {
      prevSate.tasks[index].title = newTaskTitle;
      prevSate.tasks[index].isEditable = false;
      return { tasks: prevSate.tasks };
    });
  }

  toggleCompleteness(index) {
    this.setState(prevSate => {
      prevSate.tasks[index].isCompleted = !prevSate.tasks[index].isCompleted;
      return { tasks: prevSate.tasks }
    });
  }

  deleteTask(index) {
    this.setState(prevSate => {
      prevSate.tasks.splice(index, 1);
      return {
        tasks: prevSate.tasks
      };
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <img style={{ width: '32px' }} src={logo} alt="logo" />
        </div>
        <TaskFrom onTaskAdd={this.addTask.bind(this)} />
        <TasksList
          tasks={this.state.tasks}
          onEditable={this.setEditable.bind(this)}
          onCancel={this.cancel.bind(this)}
          onSave={this.updateTask.bind(this)}
          onTaskComplete={this.toggleCompleteness.bind(this)}
          onDelete={this.deleteTask.bind(this)} />
      </div>
    );
  }
}

export default App;
