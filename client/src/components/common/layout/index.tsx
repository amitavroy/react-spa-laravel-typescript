import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopNav from '../topnav';
import Aside from '../aside';
import UserStateInterface from '../../../interfaces/UserStateInterface';

interface Props {
  user: UserStateInterface
}

class Layout extends Component<Props> {
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <Aside user={this.props.user} />
        {this.props.children}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Layout);
