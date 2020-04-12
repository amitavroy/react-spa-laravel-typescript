import React, { Component } from "react";
import Card from "./../common/card";
import TopCards from "./topcards";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <TopCards />
        <div className="row">
          <div className="col-md-7">
            <Card />
          </div>
          <div className="col-md-5">
            <Card />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
