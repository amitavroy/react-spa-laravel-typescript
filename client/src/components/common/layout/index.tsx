import React, { Component } from 'react';
import TopNav from '../topnav';
import Aside from '../aside';

interface Props {

}

class Layout extends Component<Props> {
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <Aside />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Layout;
