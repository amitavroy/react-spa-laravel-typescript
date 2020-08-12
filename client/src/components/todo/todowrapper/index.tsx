import React, { Component } from "react";
import Card from "../../common/card";
import TodoService from "../../../services/TodoService";
import TodoEvent from "../../../interfaces/TodoEvent";
import TodoList from "../todolist";
import Modal from "../../common/modal";
import TodoAdd from "../todoadd";

const TodoFooter = (props) => {
  return (
    <button
      className="btn btn-primary btn-sm"
      onClick={() => props.handleAddTodo()}
    >
      Add new Todo
    </button>
  );
};

class TodoWrapper extends Component {
  state = { showModal: false, todos: [] };
  async componentDidMount() {
    const response = await TodoService.getTodoList();
    this.setState({ todos: response });
    this.handleTodoDelete();
  }
  componentWillUnmount() {
    TodoService.getObservable().unsubscribe();
  }
  handleTodoDelete() {
    TodoService.getObservable().subscribe(async (event: TodoEvent) => {
      const postData = { id: event.data.id };
      await TodoService.removeTodo(postData);
      let newTodos = this.state.todos.filter((todo) => {
        return event.data.id !== todo.id;
      });
      this.setState({ todos: newTodos });
    });
  }
  async handleTodoAdd(data) {
    const todo = await TodoService.saveNewTodo(data);
    let newTodos = this.state.todos;
    newTodos.unshift(todo);
    this.setState({ todo: newTodos });
  }
  render() {
    const { showModal, todos } = this.state;
    return (
      <Card
        title="Todo list"
        titleIcon="ion-clipboard"
        footer={
          <TodoFooter
            showModal={showModal}
            handleAddTodo={() => this.setState({ showModal: true })}
          />
        }
      >
        {todos.length > 0 && <TodoList todosProp={todos} />}
        <Modal
          title="Add new Todo"
          visibility={showModal}
          size="lg"
          onClose={() => this.setState({ showModal: !showModal })}
        >
          <TodoAdd onTodoAdd={(data) => this.handleTodoAdd(data)} />
        </Modal>
      </Card>
    );
  }
}

export default TodoWrapper;
