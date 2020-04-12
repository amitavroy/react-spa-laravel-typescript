import React, { Component } from "react";
import NotificationDropdown from "../notificationdropdown";
import ChatDropdown from "../chatdropdown";

class RigthDropdown extends Component {
  render() {
    return (
      <ul className="navbar-nav ml-auto">
        <ChatDropdown />
        <NotificationDropdown />
      </ul>
    );
  }
}

export default RigthDropdown;
