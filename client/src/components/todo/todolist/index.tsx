import React, { Component } from 'react';
import TodoService from '../../../services/TodoService';
import TodoItem from './../todoitem';

class TodoList extends Component {
  state = { todos: [], loading: false };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await TodoService.getTodoList();
    this.setState({ loading: false, todos: response });
  }

  renderItems() {
    const { todos } = this.state;
    return todos.map(todo => {
      return <TodoItem />;
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <React.Fragment>
        {todos.length === 0 ?
          <p>No todos yet</p> :
          <ul className="todo-list">{this.renderItems()}</ul>
        }
      </React.Fragment>
    );
  }
}

export default TodoList;
