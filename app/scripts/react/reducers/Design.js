import store from 'store';
import Immutable from 'immutable';
import { diff } from 'deep-diff';
import createReducer from '../utils/createReducer';
import createObjectUrl from '../utils/createObjectUrl';
import * as actionTypes from '../constants/actionTypes';
import * as storageKeys from '../constants/storageKeys';

const current = {
  activeElementsColor: '#000000',
  mainPageProductsInRow: 2,
  mainPageRows: 5,
  mainPageInstagram: true,
  mainPageSlider: false,
  mainPageBanner: true,
  mainPageFilter: true,
  categoryPageProductsInRow: 2,
  categoryPageRows: 5,
  categoryPageFilter: true,
  productPagePhoto: 'aside',
  showSimilarProducts: true,
  // productPageSimilarProducts: 'off',
  logoUrl: null,
  pageBgUrl: null,
  pageBgColor: '#6c7a89',
  feedBgColor: '#000000',
  feedTransparency: .7,
  fontColor: '#000000',
  fontFamily: 'helvetica',
  fontSize: 'md',
};

const initialState = Immutable.fromJS({
  current: current,
  currentSaved: current,
  unsavedFields: {},
  isSaving: false
});

function getUnsavedFields(currentSaved, current) {
  return Object.keys(current).reduce((prev, key) => {
    if (currentSaved[key] !== current[key]) {
      return { ...prev, [key]: current[key] };
    }
    return prev;
  }, {});
}

export default createReducer(initialState, {
  [actionTypes.POPUP_CLOSE](state) {
    const currentSaved = state.toJS().currentSaved;

    return state.merge({
      current: currentSaved,
      unsavedFields: {},
      isSaving: false,
    });
  },
  [actionTypes.DESIGN_INIT](state) {
    const currentSaved = state.toJS().current;
    const currentCached = store.get(storageKeys.DESIGN_CURRENT);

    if (currentCached && diff(currentSaved, currentCached)) {
      return state.merge({
        current: currentCached,
        unsavedFields: getUnsavedFields(currentSaved, currentCached),
      });
    } else {
      return state;
    }
  },
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
          [name + 'Url']: file ? createObjectUrl(file) : file,
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
    store.remove(storageKeys.DESIGN_CURRENT);

    return state.merge({
      current: design,
      currentSaved: design,
      unsavedFields: {},
      isSaving: false
    });
  }
});