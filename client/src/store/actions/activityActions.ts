import { Dispatch } from 'redux';

import ActivityService from './../../services/ActivityService';

export const getActivities = () => {
  return async (dispatch: Dispatch) => {
    const response = await ActivityService.getCurrentUserActivities();
    dispatch({ type: 'ACTIVITIES_SET', payload: response });
  }
}

export const setActivities = (activities) => {
  return { type: 'ACTIVITIES_SET', payload: activities }
}
