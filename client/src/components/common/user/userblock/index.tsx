import React, { Component } from 'react';
import UserInterface from './../../../../interfaces/UserInterface'

const user128 = require('./../../../../assets/img/user1-128x128.jpg');

interface Props {
  user: UserInterface
  time?: string
}

class UserBlock extends Component<Props> {
  render() {
    const { name } = this.props.user;
    const { time } = this.props;
    return (
      <div className="user-block">
        <img className="img-circle img-bordered-sm" src={user128} alt={name} />
        <span className="username">
          <a href="/" onClick={event => event.preventDefault()}>{name}</a>
          <a href="/" className="float-right btn-tool" onClick={event => event.preventDefault()}><i className="fas fa-times"></i></a>
        </span>
        {time && <span className="description">Shared publicly - {time}</span>}
      </div>
    );
  }
}

export default UserBlock;
