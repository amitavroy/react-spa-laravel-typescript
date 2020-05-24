import React, { Component } from "react";
import Card from "./../common/card";
import TopCards from "./topcards";
import TodoList from "./../todo/todolist";
import Modal from "../common/modal";
import TodoAdd from "../todo/todoadd";
import TodoService from "../../services/TodoService";

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

class Home extends Component {
  state = { showModal: false, todos: [] };
  async componentDidMount() {
    const response = await TodoService.getTodoList();
    this.setState({ todos: response });
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
      <React.Fragment>
        <TopCards />
        <div className="row">
          <div className="col-md-7">
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
          </div>
          <div className="col-md-5">
            <Card title="Demo list">Some content will come here later.</Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
