import React, { Component } from "react";

class NotificationDropdown extends Component {
  state = { open: false };

  handleDropdownClick(event) {
    event.preventDefault();
    this.setState({ open: !this.state.open });
  }

  render() {
    const { open } = this.state;
    return (
      <li className={`nav-item dropdown ${open ? "open" : ""}`}>
        <a
          className="nav-link"
          data-toggle="dropdown"
          href="/"
          onClick={(event) => this.handleDropdownClick(event)}
        >
          <i className="far fa-bell"></i>
          <span className="badge badge-warning navbar-badge">15</span>
        </a>
        <div
          className={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${
            open ? "show" : ""
          }`}
        >
          <span className="dropdown-item dropdown-header">
            15 Notifications
          </span>
          <div className="dropdown-divider"></div>
          <a
            href="/"
            className="dropdown-item"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <i className="fas fa-envelope mr-2"></i> 4 new messages
            <span className="float-right text-muted text-sm">3 mins</span>
          </a>
          <div className="dropdown-divider"></div>
          <a
            href="/"
            className="dropdown-item"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <i className="fas fa-users mr-2"></i> 8 friend requests
            <span className="float-right text-muted text-sm">12 hours</span>
          </a>
          <div className="dropdown-divider"></div>
          <a
            href="/"
            className="dropdown-item"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <i className="fas fa-file mr-2"></i> 3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
          </a>
          <div className="dropdown-divider"></div>
          <a
            href="/"
            className="dropdown-item dropdown-footer"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            See All Notifications
          </a>
        </div>
      </li>
    );
  }
}

export default NotificationDropdown;
