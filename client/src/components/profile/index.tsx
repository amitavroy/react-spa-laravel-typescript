import React, { Component } from 'react';
import UserProfileCard from './../common/user/userprofilecard';
import UserInterface from './../../interfaces/UserInterface';

interface Props {
  user: UserInterface
}

class Profile extends Component<Props> {
  render() {
    const { user } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserProfileCard user={user} />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
