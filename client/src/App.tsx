import React, { Component } from 'react';

import "./assets/css/gloabl.scss";
import "./assets/css/adminlte.css";
import "./assets/css/fontawesome-free/css/all.css";

import Layout from './components/common/layout';
import Content from './components/common/content';
import Home from './components/home';

class App extends Component {
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

export default App;
