import { combineReducers } from 'redux';
import persons from './persons';
import modal from './modal';
import { createReducer } from "redux-orm";
import { orm } from '../models/models'
export default combineReducers({
  modal, 
  persons,
  orm: createReducer(orm)
});
