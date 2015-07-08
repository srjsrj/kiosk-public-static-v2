import {
  POPUP_OPEN,
  POPUP_CLOSE
} from '../constants/actionTypes';

export function openPopup(style, props) {
  return {
    type: POPUP_OPEN,
    style,
    props
  };
}

export function closePopup(style) {
  return {
    type: POPUP_CLOSE,
    style
  };
}

export function openDesignSettingsPopup() {
  return openPopup('DesignSettings');
}

export function closeDesignSettingsPopup() {
  return closePopup('DesignSettings');
}