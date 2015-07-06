import Immutable from 'immutable';
import createReducer from '../lib/createReducer';
import * as actionTypes from '../constants/actionTypes';
import designOptions from '../models/designOptions';

const current = {
  pageBgColor: '#6c7a89',
  activeColor: '#1a0f17',
  fontFamily: 'verdana',
  fontColor: '#2ac67e',
  fontSize: 'lg',
  feedBgColor: '#000000',
  feedTransparency: .5,
  columns: 3,
  photoOnTop: false,
  pageBgUrl: 'http://eandys.ru/image.php?di=PZUV',
  logoUrl: '../images/cc/logo.png'
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