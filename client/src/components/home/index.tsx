import React, { Component } from "react";
import Card from "./../common/card";
import TopCards from "./topcards";
import TodoList from './../todo/todolist';

const TodoFooter = () => {
  return <span>This is the footer with <strong>bold</strong> & <i>italics</i></span>
}

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <TopCards />
        <div className="row">
          <div className="col-md-7">
            <Card title="Todo list" titleIcon="ion-clipboard" footer={<TodoFooter />}>
              <TodoList />
            </Card>
          </div>
          <div className="col-md-5">
            <Card title="Demo list">
              Some content will come here later.
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
