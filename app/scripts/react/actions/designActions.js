import Requester from '../api/Requester';
import * as apiRoutes from '../../routes/api';
import * as actionTypes from '../constants/actionTypes';

export function changeOption(name, value) {
  return {
    type: actionTypes.DESIGN_CHANGE_OPTION,
    name,
    value
  };
}

export function changeImage(name, file) {
  return {
    type: actionTypes.DESIGN_CHANGE_ATTACHMENT_OPTION,
    name,
    file
  };
}

export function saveChanges() {
  return (dispatch, getState) => {
    const current = getState().design.get('current').toJS();
    const availableKeys = [
      'pageBgColor', 'pageBgFile', 'fontFamily', 'fontColor', 'fontSize',
      'feedBgColor', 'feedTransparency', 'productsInRow', 'productLayoutBigpic',
      'logoFile'
    ];
    const data = Object.keys(current).reduce(function (previous, key) {
      if (availableKeys.indexOf(key) !== -1) previous[key] = current[key];
      return previous;
    }, {});

    // FIXME: Use redux-actions with promise field
    dispatch({ type: actionTypes.DESIGN_SAVE });
    Requester.create(apiRoutes.designSettings(), data)
      .then((design) => {
        dispatch({
          type: actionTypes.DESIGN_SAVE_SUCCESS,
          design
        });
      })
      .fail((xhr) => {
        dispatch({ type: actionTypes.DESIGN_SAVE_FAILURE });
        // FIXME: Use nice and clean NoticeService.errorResponse
        alert(JSON.parse(xhr.responseText).error);
      });
  }
}