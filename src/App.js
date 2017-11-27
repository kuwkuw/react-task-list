import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="task-controls group-controls">
          <input type="text" placeholder="My next task"/>
          <button>Add</button>
        </div>
        <div className="tasks-list">
        <h3>
          Tasks list
        </h3>
        <div className="tasks-list-container"></div>
        </div>
      </div>
    );
  }
}

export default App;
