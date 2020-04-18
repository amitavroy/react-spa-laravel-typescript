import React, { Component } from "react";

interface Props {
  tabs: any;
  handleEnableTab: any;
}

class TabPill extends Component<Props> {
  enableTab(event, tabName: string) {
    event.preventDefault();
    this.props.handleEnableTab(tabName);
  }

  renderTabs() {
    const { tabs } = this.props;
    const tabPills = Object.keys(tabs);

    return tabPills.map((tab, index) => {
      return (
        <li className="nav-item" key={index} id={`tab-pill-${index}`}>
          <a
            className={`nav-link ${tabs[tab].active ? "active" : "inactive"}`}
            href="/"
            onClick={(event) => this.enableTab(event, tab)}
          >
            {tabs[tab].name}
          </a>
        </li>
      );
    });
  }

  render() {
    return <ul className="nav nav-pills">{this.renderTabs()}</ul>;
  }
}

export default TabPill;
