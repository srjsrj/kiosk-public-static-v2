import Immutable from 'immutable';
import createReducer from '../utils/createReducer';

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
  productPageSimilarProducts: 'off',
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

export default createReducer(initialState, {});