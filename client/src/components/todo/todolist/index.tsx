import React, { Component } from "react";
import TodoService from "../../../services/TodoService";
import TodoItem from "./../todoitem";

class TodoList extends Component {
  state = { todos: [], loading: false };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await TodoService.getTodoList();
    this.setState({ loading: false, todos: response });
  }

  async markTodoCompelte(todo) {
    const response = await TodoService.markTodoComplete(todo);
    let todos = this.state.todos;
    todos.forEach((todo, index) => {
      if (todo.id === response.id) {
        todos[index] = response;
      }
    });
    this.setState({ todos });
  }

  renderItems() {
    const { todos } = this.state;
    return todos.map((todo, index) => {
      return <TodoItem key={index} todo={todo} markTodoCompelete={todo => this.markTodoCompelte(todo)} />;
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <React.Fragment>
        {todos.length === 0 ? (
          <p>No todos yet</p>
        ) : (
            <ul className="todo-list">{this.renderItems()}</ul>
          )}
      </React.Fragment>
    );
  }
}

export default TodoList;
