import React, { Component } from "react";
import TodoInterface from './../../../interfaces/TodoInterface';

interface Props {
  todo: TodoInterface
}

class TodoItem extends Component<Props> {
  render() {
    const { todo } = this.props;
    return (
      <li className={(todo.is_completed === "1") ? 'done' : 'pending'}>
        <span className="handle">
          <i className="fas fa-ellipsis-v"></i>
          <i className="fas fa-ellipsis-v"></i>
        </span>
        <div className="icheck-primary d-inline ml-2">
          <input type="checkbox" value=""
            name={`todo${todo.id}`} id={`todoCheck${todo.id}`}
            checked={(todo.is_completed === "1") ? true : false} />
          <label htmlFor={`todoCheck${todo.id}`}></label>
        </div>
        <span className="text">{todo.description}</span>
        <small className={`badge ${todo.badge}`}>
          <i className="far fa-clock"></i> {todo.pending}
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
