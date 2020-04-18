import React, { Component } from "react";
import RightDropdown from "./rightdropdown";
import { Link } from "react-router-dom";

class TopNav extends Component {
  render() {
    return (
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="../../index3.html"
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="../../index3.html" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <form className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input
              className="form-control form-control-navbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>

        <RightDropdown />
      </nav>
    );
  }
}

export default TopNav;
