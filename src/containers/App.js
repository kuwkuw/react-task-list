import React, { Component } from 'react'
import { createStore } from 'redux'

import todoApp from '../store/reducers'
import TasksList from './TasksList'
import TaskForm from '../components/TaskForm'
import logo from '../assets/logo.svg'
import './App.css'

let store = createStore(todoApp)

class App extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(()=>{
        return store.getState()
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div>
          <img style={{ width: '32px' }} src={logo} alt="logo" />
        </div>
        <TaskForm store={store} />
        <TasksList todos={this.state.todos} store={store} />
      </div>
    );
  }
}

export default App;
