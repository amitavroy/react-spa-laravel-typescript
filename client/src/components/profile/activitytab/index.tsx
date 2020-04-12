import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TextPost from "../../common/activity/textpost/indext";
import { getActivities } from "./../../../store/actions/activityActions";

interface Props {
  activities: any;
  getActivities: typeof getActivities;
}

class ActivityTab extends Component<Props> {
  componentDidMount() {
    if (this.props.activities.length === 0) {
      this.props.getActivities();
    }
  }

  renderActivities() {
    const { activities } = this.props;
    return activities.map((activity, index) => {
      return <TextPost activity={activity} key={index} />;
    });
  }

  render() {
    return <div>{this.renderActivities()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    activities: state.activity.activities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getActivities: bindActionCreators(getActivities, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityTab);
