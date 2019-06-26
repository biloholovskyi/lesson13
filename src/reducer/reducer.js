import { combineReducers } from 'redux'
import taskState from './taskState';
import tasks from './tasks';

export default combineReducers({
  taskState,
  tasks
})