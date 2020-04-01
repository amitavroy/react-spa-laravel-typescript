import React, { Component } from 'react';
import Layout from '../../components/common/layout';
import Content from '../../components/common/content';
import ProfileContent from './../../components/profile';

class Profile extends Component {
  render() {
    return (
      <div className="wrapper">
        <Layout>
          <Content title="Profile">
            <ProfileContent />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Profile;
