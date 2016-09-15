import createReducer from '../utils/createReducer';
import { fromJS } from 'immutable';
import {
  PACKAGES_REQUEST,
  PACKAGES_SUCCESS,
  PACKAGES_FAILURE,
} from '../actions/PackagesActions';

const initialState = fromJS({
  packages: [],
  isFetching: false,
  error: null,
});

export function initPackageStore(state, { response }) {
  return state.merge({
    packages: response,
    isFetching: false,
    error: null,
  });
}

const actionMap = {
  [PACKAGES_REQUEST](state) {
    return state.merge({
      isFetching: true,
      error: null,
    });
  },

  [PACKAGES_SUCCESS](state, action) {
    return initPackageStore(state, action);
  },

  [PACKAGES_FAILURE](state, { error }) {
    return state.merge({
      isFetching: false,
      error,
    });
  },
};

export default createReducer(initialState, actionMap);
