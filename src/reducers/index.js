import { combineReducers } from 'redux';
import persons from './persons';
import modal from './modal';
export default combineReducers({
  modal, persons
});
