import React, { Component } from "react";
import Card from "./../common/card";
import TopCards from "./topcards";

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
              <ul>
                <li>List item 1</li>
                <li>List item 2</li>
              </ul>
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
