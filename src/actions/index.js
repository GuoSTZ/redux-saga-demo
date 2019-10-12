import { actionTypes } from '../common/actionTypes';

/**定义action操作，返回一个对象，包含action的类型和一个value值 */

export function addPerson(value) {
  return {
    type: actionTypes.ADD_PERSON,
    value
  };
}

export function deletePerson(index) {
  return {
    type: actionTypes.DELETE_PERSON,
    index
  };
}

export function modifyPerson(value) {
  return {
    type: actionTypes.MODIFY_PERSON,
    value
  };
}
export function showModal(value) {
  return {
    type: actionTypes.SHOW_MODAL,
    value
  };
}

export function hideModal(value) {
  return {
    type: actionTypes.HIDE_MODAL,
    value
  };
}
