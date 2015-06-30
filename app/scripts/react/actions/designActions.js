import {
  DESIGN_CHANGE_OPTION,
  DESIGN_SAVE,
  DESIGN_SAVE_SUCCESS,
  DESIGN_SAVE_FAIL
} from './actionTypes';

export function changeOption(name, value) {
  return {
    type: DESIGN_CHANGE_OPTION,
    name,
    value
  }
}

export function save() {
  return {
    types: [DESIGN_SAVE, DESIGN_SAVE_SUCCESS, DESIGN_SAVE_FAIL],
    promise: (client) => loadFromServer(client) 
  };
}