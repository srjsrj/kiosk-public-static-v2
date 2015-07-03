import Immutable from 'immutable';
import createReducer from '../lib/createReducer';
import * as actionTypes from '../constants/actionTypes';
import designOptions from '../models/designOptions';

const current = {
  pageColor: '#bf443f',
  textColor: '#894c00',
  activeColor: '#1a0f17',
  fontFamily: 'verdana',
  fontSize: 'lg',
  columns: 3,
  photoOnTop: false,
  feedTransparency: 15,
  pageBg: {
    id: null,
    // url: 'http://eandys.ru/image.php?di=PZUV'
    url: null
  },
  logo: {
    id: null,
    url: '../images/cc/logo.png'
  }
};

const initialState = Immutable.fromJS({
  current: current,
  currentSaved: current,
  hasUnsavedFields: false,
  options: designOptions
});

export default createReducer(initialState, {
  [actionTypes.DESIGN_CHANGE_OPTION](state, { name, value }) {
    return state.mergeDeep({
      current: { [name]: value },
      hasUnsavedFields: state.getIn(['currentSaved', name]) !== value
    });
  }
});