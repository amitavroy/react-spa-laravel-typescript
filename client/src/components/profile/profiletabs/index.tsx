import React, { Component } from 'react';

class ProfileTabs extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header p-2">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" href="#activity" data-toggle="tab">Activity</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#timeline" data-toggle="tab">Timeline</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#settings" data-toggle="tab">Settings</a>
            </li>
          </ul>
        </div>

        <div className="card-body">
          <div className="tab-content">
            Please check
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileTabs;
