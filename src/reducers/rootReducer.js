import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import projectReducer from './projectReducer';

export const reducers = {
  ...loginReducer,
  ...projectReducer,
};

export default combineReducers(reducers);
