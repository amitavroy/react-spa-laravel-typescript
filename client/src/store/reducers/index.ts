import { combineReducers } from 'redux'
import user from './user';
import activity from './activity';

export default combineReducers({
  user, activity
})
