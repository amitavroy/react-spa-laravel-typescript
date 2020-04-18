import React, { Component } from "react";
import Layout from "../../components/common/layout";
import Content from "../../components/common/content";
import Home from "./../../components/home";

class HomePage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Layout>
          <Content title="Dashboard">
            <Home />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default HomePage;
