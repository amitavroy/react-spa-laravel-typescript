import React, { Component } from 'react';
import TextPost from '../../common/activity/textpost/indext';

import ActivityService from './../../../services/ActivityService';

class ActivityTab extends Component {
  state = { activities: [] }

  async componentDidMount() {
    const response = await ActivityService.getCurrentUserActivities();
    this.setState({ activities: response });
  }

  renderActivities() {
    const { activities } = this.state;
    return activities.map((activity, index) => {
      return <TextPost activity={activity} key={index} />
    })
  }

  render() {
    return (
      <div>{this.renderActivities()}</div>
    );
  }
}

export default ActivityTab;
