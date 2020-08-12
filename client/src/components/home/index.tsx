import React, { Component } from "react";
import Card from "./../common/card";
import TopCards from "./topcards";
import TodoWrapper from "../todo/todowrapper";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <TopCards />
        <div className="row">
          <div className="col-md-6">
            <TodoWrapper />
          </div>
          <div className="col-md-5">
            <Card title="Some content will come" titleIcon="ion-clipboard">
              <p>Content will come.</p>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
