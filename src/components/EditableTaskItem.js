import React, { Component } from 'react';

class EditableItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newTaskTitle: this.props.task.title
    }
  }

  render() {
    const editableControls = (
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
              <button className="btn btn-default" onClick={this.props.onCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <li className={this.props.task.isCompleted ? 'list-group-item completed' : 'list-group-item'}>
        {editableControls}
      </li>
    );
  }
}

export default EditableItem;