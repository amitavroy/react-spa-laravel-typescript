import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/common/layout';
import Content from '../../components/common/content';
import ProfileContent from './../../components/profile';
import UserStateInterface from './../../interfaces/UserStateInterface';
import { setUser, getUser } from './../../store/actions';

interface Props {
  setUser: typeof setUser
  user: UserStateInterface
}

class Profile extends Component<Props> {
  render() {
    const { currentUser } = this.props.user;
    return (
      <div className="wrapper">
        <Layout>
          <Content title="Profile">
            {currentUser && <ProfileContent user={currentUser} />}
          </Content>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { setUser, getUser })(Profile);
