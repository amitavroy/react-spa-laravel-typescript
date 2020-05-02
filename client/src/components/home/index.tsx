import React, { Component } from "react";
import Card from "./../common/card";
import TopCards from "./topcards";
import TodoList from "./../todo/todolist";
import Modal from "../common/modal";

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
  state = { showModal: false };
  render() {
    const { showModal } = this.state;
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
              <TodoList />
              <Modal
                title="Add new Todo"
                visibility={showModal}
                size="lg"
                onClose={() => this.setState({ showModal: !showModal })}
              >
                <p>
                  This is where the form will <strong>come</strong>.
                </p>
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
