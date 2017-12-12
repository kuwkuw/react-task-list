import React, { Component } from 'react'

import TasksListContainer from './TasksList'
import TaskFormContainer from './TaskForm'
import logo from '../assets/logo.svg'
import './App.css'


class App extends Component {

  render() {
    return (
      <div className="container">
        <div>
          <img style={{ width: '32px' }} src={logo} alt="logo" />
        </div>
        <TaskFormContainer />
        <TasksListContainer />
      </div>
    );
  }
}

export default App
