import React, { Component } from "react";
import UserInterface from "./../../../../interfaces/UserInterface";

const user128 = require("./../../../../assets/img/user1-128x128.jpg");

interface Props {
  user: UserInterface;
}

class UserProfileCard extends Component<Props> {
  render() {
    const {
      name,
      designation,
      followers,
      following,
      friends,
    } = this.props.user;
    return (
      <div className="card card-primary card-outline">
        <div className="card-body box-profile">
          <div className="text-center">
            <img
              className="profile-user-img img-fluid img-circle"
              src={user128}
              alt={name}
            />
          </div>
          <h3 className="profile-username text-center">{name}</h3>
          <p className="text-muted text-center">{designation}</p>
          <ul className="list-group list-group-unbordered mb-3">
            <li className="list-group-item">
              <b>Followers</b>{" "}
              <a
                href="/"
                className="float-right"
                onClick={(event) => event.preventDefault()}
              >
                {followers}
              </a>
            </li>
            <li className="list-group-item">
              <b>Following</b>{" "}
              <a
                href="/"
                className="float-right"
                onClick={(event) => event.preventDefault()}
              >
                {following}
              </a>
            </li>
            <li className="list-group-item">
              <b>Friends</b>{" "}
              <a
                href="/"
                className="float-right"
                onClick={(event) => event.preventDefault()}
              >
                {friends}
              </a>
            </li>
          </ul>
          <a
            href="/"
            className="btn btn-primary btn-block"
            onClick={(event) => event.preventDefault()}
          >
            <b>Follow</b>
          </a>
        </div>
      </div>
    );
  }
}

export default UserProfileCard;
