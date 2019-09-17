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
