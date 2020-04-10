import React, { Component } from 'react';
import TabPill from '../../common/tab/tabpill';
import ActivityTab from './../activitytab';
import SettingsTab from './../settingstab';

class ProfileTabs extends Component {
  state = {
    tabs: {
      activity: { active: true, name: 'Activity', component: ActivityTab, props: {} },
      timeline: { active: false, name: 'Timeline', component: ActivityTab, props: {} },
      settings: { active: false, name: 'Settings', component: SettingsTab, props: {} }
    }
  }

  enableTab(tabName: string) {
    const { tabs } = this.state;

    if (tabs[tabName] === undefined) {
      return true;
    }

    const keys = Object.keys(tabs);
    let newTabs = tabs;

    keys.forEach(key => {
      newTabs[key].active = false;
      newTabs[key].name = tabs[key].name;
    });

    newTabs[tabName].active = true;
    this.setState({ tabs: newTabs });
  }

  renderTabContent() {
    const { tabs } = this.state;
    const keys = Object.keys(tabs);
    return keys.map((tabName, index) => {
      const Component = tabs[tabName].component;
      return (
        <div className={`tab-pane ${tabs[tabName].active ? 'active' : 'inactive'}`} id={tabName} key={index}>
          <Component {...tabs[tabName].props} />
        </div>
      );
    })
  }

  render() {
    const { tabs } = this.state;
    return (
      <div className="card">
        <div className="card-header p-2">
          <TabPill tabs={tabs} handleEnableTab={(tabName) => this.enableTab(tabName)} />
        </div>

        <div className="card-body">
          <div className="tab-content">{this.renderTabContent()}</div>
        </div>
      </div>
    );
  }
}

export default ProfileTabs;
