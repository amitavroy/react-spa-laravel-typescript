import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <li>
        <span className="handle">
          <i className="fas fa-ellipsis-v"></i>
          <i className="fas fa-ellipsis-v"></i>
        </span>
        <div className="icheck-primary d-inline ml-2">
          <input type="checkbox" value="" name="todo1" id="todoCheck1" />
          <label htmlFor="todoCheck1"></label>
        </div>
        <span className="text">Design a nice theme</span>
        <small className="badge badge-danger">
          <i className="far fa-clock"></i> 2 mins
        </small>
        <div className="tools">
          <i className="fas fa-edit"></i>
          <i className="fas fa-trash-o"></i>
        </div>
      </li>
    );
  }
}

export default TodoItem;
