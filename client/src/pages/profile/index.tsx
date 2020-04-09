import React, { Component } from 'react';
import Layout from '../../components/common/layout';
import Content from '../../components/common/content';
import ProfileContent from './../../components/profile';
import UserService from '../../services/UserService';
import UserInterface from './../../interfaces/UserInterface';

class Profile extends Component {
  state = { user: null }

  async componentDidMount() {
    const user: UserInterface = await UserService.getCurrentUserProfile();
    this.setState({ user: user });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="wrapper">
        <Layout>
          <Content title="Profile">
            {user && <ProfileContent user={user} />}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Profile;
