import React, { Component } from "react";
import TodoInterface from "./../../../interfaces/TodoInterface";
import TodoService from "../../../services/TodoService";
import TodoEvent from "../../../interfaces/TodoEvent";

interface Props {
  todo: TodoInterface;
  markTodoCompelete: any;
  dragHandle: any;
}

class TodoItem extends Component<Props> {
  handleTodoCheck(event) {
    event.preventDefault();
    const { todo } = this.props;
    this.props.markTodoCompelete(todo);
  }
  handleTodoDelete() {
    const event: TodoEvent = {
      name: "todo_delete",
      data: this.props.todo,
    };
    TodoService.getObservable().next(event);
  }
  render() {
    const { todo, dragHandle } = this.props;
    return (
      <li className={`${todo.is_completed === true ? "done" : ""} todo-item`}>
        {dragHandle}
        <div className="icheck-primary d-inline ml-2">
          <input
            type="checkbox"
            value=""
            onChange={(event) => this.handleTodoCheck(event)}
            name={`todo${todo.id}`}
            id={`todoCheck${todo.id}`}
            checked={todo.is_completed == true ? true : false}
          />
          <label htmlFor={`todoCheck${todo.id}`}></label>
        </div>
        <span
          className="text cursor handleTodoCheck"
          onClick={(event) => this.handleTodoCheck(event)}
        >
          {todo.description}
        </span>
        <small className={`badge ${todo.badge}`}>
          <i className="far fa-clock"></i> {todo.pending}
        </small>
        <div className="tools">
          <i
            className="fas fa-trash"
            onClick={() => this.handleTodoDelete()}
          ></i>
        </div>
      </li>
    );
  }
}

export default TodoItem;
