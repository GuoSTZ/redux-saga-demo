import { actionTypes } from '../common/actionTypes';

/**定义action操作，返回一个对象，包含action的类型和一个value值 */

export function addPerson(value) {
  return {
    type: actionTypes.ADD_PERSON,
    value
  };
}

export function importPersons() {
  return {
    type: actionTypes.IMPORT_PERSONS,
  };
}

export function deletePerson(index) {
  return {
    type: actionTypes.DELETE_PERSON,
    index
  };
}

export function modifyPerson(value, index) {
  return {
    type: actionTypes.MODIFY_PERSON,
    value,
    index
  };
}
export function showModal(index) {
  return {
    type: actionTypes.SHOW_MODAL,
    index
  };
}

export function hideModal(index) {
  return {
    type: actionTypes.HIDE_MODAL,
    index
  };
}
