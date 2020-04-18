import React, { Component } from "react";
import { Link } from "react-router-dom";

interface LinkArray {
  name: string;
  link: string;
}

interface MenuOptions {
  groupName: string;
  groupIcon: string;
  link: Array<LinkArray>;
}

interface Props {
  options: MenuOptions;
}

class TreeView extends Component<Props> {
  state = { open: false };

  toggleMenuOpenClose(event) {
    event.preventDefault();
    this.setState({ open: !this.state.open });
  }

  renderLinks() {
    return this.props.options.link.map((link) => {
      return (
        <li className="nav-item">
          <Link to={link.link} className="nav-link">
            <i className="far fa-circle nav-icon"></i>
            <p>{link.name}</p>
          </Link>
        </li>
      );
    });
  }

  render() {
    const { groupName, groupIcon } = this.props.options;
    const { open } = this.state;
    return (
      <ul
        className="nav nav-pills nav-sidebar flex-column text-sm nav-legacy"
        data-widget="treeview"
        role="menu"
      >
        <li className={`nav-item has-treeview ${open ? "menu-open" : ""}`}>
          <a
            href="/"
            className={`nav-link ${open ? "active" : ""}`}
            onClick={(event) => this.toggleMenuOpenClose(event)}
          >
            <i className={`nav-icon fas ${groupIcon}`}></i>
            <p>
              {groupName}
              <i className="right fas fa-angle-left"></i>
            </p>
          </a>

          <ul className="nav nav-treeview" id={`${groupName}-link`}>
            {this.renderLinks()}
          </ul>
        </li>
      </ul>
    );
  }
}

export default TreeView;
