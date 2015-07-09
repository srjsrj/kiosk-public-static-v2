import Immutable from 'immutable';
import createReducer from '../utils/createReducer';
import createObjectURL from '../utils/createObjectURL';
import * as actionTypes from '../constants/actionTypes';

const current = {
  pageBgColor: '#6c7a89',
  pageBgUrl: null,
  fontFamily: 'verdana',
  fontColor: '#2ac67e',
  fontSize: 'lg',
  feedBgColor: '#000000',
  feedTransparency: .7,
  productsInRow: 3,
  productLayoutBigpic: false,
  logoUrl: null
};

const initialState = Immutable.fromJS({
  current: current,
  currentSaved: current,
  unsavedFields: {},
  isSaving: false
});

export default createReducer(initialState, {
  [actionTypes.DESIGN_CHANGE_OPTION](state, { name, value }) {
    let unsavedFields = state.get('unsavedFields');

    if (state.getIn(['currentSaved', name]) !== value) {
      unsavedFields = unsavedFields.set(name, value);
    } else {
      unsavedFields = unsavedFields.delete(name);
    }

    return state
      .mergeDeep({ current: { [name]: value } })
      .merge({ unsavedFields });
  },
  [actionTypes.DESIGN_CHANGE_ATTACHMENT_OPTION](state, { name, file }) {
    let unsavedFields = state.get('unsavedFields');

    if (state.getIn(['currentSaved', name]) !== file) {
      unsavedFields = unsavedFields.set(name, file);
    } else {
      unsavedFields = unsavedFields.delete(name);
    }

    return state
      .mergeDeep({
        current: {
          [name + 'Url']: file ? createObjectURL(file) : file,
          [name + 'File']: file
        }
      })
      .merge({ unsavedFields });
  },
  [actionTypes.DESIGN_SAVE](state) {
    return state.merge({
      isSaving: true
    });
  },
  [actionTypes.DESIGN_SAVE_FAILURE](state) {
    return state.merge({
      isSaving: false
    });
  },
  [actionTypes.DESIGN_SAVE_SUCCESS](state, { design }) {
    return state.merge({
      current: design,
      currentSaved: design,
      unsavedFields: {},
      isSaving: false
    });
  }
});