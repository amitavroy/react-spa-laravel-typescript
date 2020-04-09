import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserStateInterface from './.././../../interfaces/UserStateInterface'

const adminLogo = require('./../../../assets/img/AdminLTELogo.png');
const user160 = require('./../../../assets/img/user2-160x160.jpg');

interface Props {
  user: UserStateInterface
}

class Aside extends Component<Props> {
  render() {
    const { currentUser } = this.props.user;
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="home" className="brand-link">
          <img src={adminLogo}
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3" />
          <span className="brand-text font-weight-light">React Admin</span>
        </Link>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src={user160} className="img-circle elevation-2" alt="User" />
            </div>
            <div className="info">
              <Link className="d-block" to="profile">{currentUser.name}</Link>
            </div>
          </div>

          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column text-sm nav-legacy" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item has-treeview">
                <a href="/" className="nav-link" onClick={(event) => {
                  event.preventDefault();
                  let dashLink = document.getElementById('dashboard-link');
                  dashLink.classList.toggle('navexpand');
                  setTimeout(() => {
                    dashLink.style.display = "block";
                  }, 1000);
                }}>
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard<i className="right fas fa-angle-left"></i></p>
                </a>
                <ul className="nav nav-treeview" id="dashboard-link">
                  <li className="nav-item">
                    <a href="../../index.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../../index2.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../../index3.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="../widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>
                    Widgets
                <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="/" className="nav-link" onClick={(event) => { event.preventDefault() }}>
                  <i className="nav-icon fas fa-copy"></i>
                  <p>
                    Layout Options
                <i className="fas fa-angle-left right"></i>
                    <span className="badge badge-info right">6</span>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Top Navigation</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/top-nav-sidebar.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Top Navigation + Sidebar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/boxed.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Boxed</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/fixed-sidebar.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Fixed Sidebar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/fixed-topnav.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Fixed Navbar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/fixed-footer.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Fixed Footer</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/collapsed-sidebar.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Collapsed Sidebar</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="/" className="nav-link" onClick={(event) => { event.preventDefault() }}>
                  <i className="nav-icon fas fa-chart-pie"></i>
                  <p>
                    Charts
                <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../charts/chartjs.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>ChartJS</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../charts/flot.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Flot</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../charts/inline.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Inline</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="/" className="nav-link" onClick={(event) => { event.preventDefault() }}>
                  <i className="nav-icon fas fa-tree"></i>
                  <p>
                    UI Elements
                <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../UI/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>General</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/icons.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Icons</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/buttons.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Buttons</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/sliders.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Sliders</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/modals.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Modals & Alerts</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/navbar.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Navbar & Tabs</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/timeline.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Timeline</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../UI/ribbons.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Ribbons</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="/" className="nav-link" onClick={(event) => { event.preventDefault() }}>
                  <i className="nav-icon fas fa-edit"></i>
                  <p>
                    Forms
                <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../forms/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>General Elements</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../forms/advanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Advanced Elements</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../forms/editors.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Editors</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../forms/validation.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Validation</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="/" className="nav-link" onClick={(event) => { event.preventDefault() }}>
                  <i className="nav-icon fas fa-table"></i>
                  <p>
                    Tables
                <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../tables/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Simple Tables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../tables/data.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>DataTables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../tables/jsgrid.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>jsGrid</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">EXAMPLES</li>
              <li className="nav-item">
                <a href="../calendar.html" className="nav-link">
                  <i className="nav-icon far fa-calendar-alt"></i>
                  <p>
                    Calendar
                <span className="badge badge-info right">2</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../gallery.html" className="nav-link">
                  <i className="nav-icon far fa-image"></i>
                  <p>
                    Gallery
              </p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="/" className="nav-link" onClick={(event) => { event.preventDefault() }}>
                  <i className="nav-icon far fa-envelope"></i>
                  <p>
                    Mailbox
                <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../mailbox/mailbox.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Inbox</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../mailbox/compose.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Compose</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../mailbox/read-mail.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Read</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="/" className="nav-link" onClick={(event) => { event.preventDefault() }}>
                  <i className="nav-icon fas fa-book"></i>
                  <p>
                    Pages
                <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../examples/invoice.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Invoice</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/profile.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Profile</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/e-commerce.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>E-commerce</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/projects.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Projects</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/project-add.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Project Add</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/project-edit.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Project Edit</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/project-detail.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Project Detail</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/contacts.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Contacts</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview menu-open">
                <a href="/" className="nav-link" onClick={(event) => { event.preventDefault() }}>
                  <i className="nav-icon far fa-plus-square"></i>
                  <p>
                    Extras
                <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../examples/login.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Login</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/register.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Register</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/forgot-password.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Forgot Password</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/recover-password.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Recover Password</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/lockscreen.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Lockscreen</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../../starter.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Starter Page</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">MISCELLANEOUS</li>
              <li className="nav-item">
                <a href="https://adminlte.io/docs/3.0" className="nav-link">
                  <i className="nav-icon fas fa-file"></i>
                  <p>Documentation</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

export default Aside;
