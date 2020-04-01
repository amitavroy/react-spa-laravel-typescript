import React, { Component } from 'react';
import UserProfileCard from './../common/user/userprofilecard';

class Profile extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserProfileCard />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
