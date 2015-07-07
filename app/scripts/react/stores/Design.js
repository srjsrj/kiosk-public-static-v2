import Immutable from 'immutable';
import createReducer from '../lib/createReducer';
import * as actionTypes from '../constants/actionTypes';
import createObjectURL from '../utils/createObjectURL';
import designOptions from '../models/designOptions';

const current = {
  pageBgColor: '#6c7a89',
  pageBgUrl: '../images/cc/logo.png',
  fontFamily: 'verdana',
  fontColor: '#2ac67e',
  fontSize: 'lg',
  feedBgColor: '#000000',
  feedTransparency: .7,
  productsInRow: 3,
  productLayoutBigpic: false,
  logoUrl: '../images/cc/logo.png'
};

const initialState = Immutable.fromJS({
  current: current,
  currentSaved: current,
  hasUnsavedFields: false,
  options: designOptions,
  updating: false
});

export default createReducer(initialState, {
  [actionTypes.DESIGN_CHANGE_OPTION](state, { name, value }) {
    return state.mergeDeep({
      current: { [name]: value },
      hasUnsavedFields: state.getIn(['currentSaved', name]) !== value
    });
  },
  [actionTypes.DESIGN_CHANGE_ATTACHMENT_OPTION](state, { name, file }) {
    return state.mergeDeep({
      current: {
        [name + 'Url']: file ? createObjectURL(file) : file,
        [name + 'File']: file
      },
      hasUnsavedFields: state.getIn(['currentSaved', name]) !== file
    });
  },
  [actionTypes.DESIGN_SAVE](state) {
    return state.merge({
      updating: true
    });
  },
  [actionTypes.DESIGN_SAVE_FAILURE](state) {
    return state.merge({
      updating: false
    });
  },
  [actionTypes.DESIGN_SAVE_SUCCESS](state, { design }) {
    return state.merge({
      current: design,
      currentSaved: design,
      hasUnsavedFields: false,
      updating: false
    });
  }
});