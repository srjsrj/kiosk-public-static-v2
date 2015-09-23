import React, { PropTypes } from 'react';
import localforage from 'localforage';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import connectToRedux from '../HoC/connectToRedux';
import * as designActions from '../../actions/designActions';
import * as popupActions from '../../actions/popupActions';
import { DESIGN_IS_OPEN } from '../../constants/storageKeys';
import DesignSettings from '.';

@connect((state) => ({
  design: state.design,
  popups: state.popup.get('popups')
}))
class DesignSettingsContainer {
  static propTypes = {
    design: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  componentWillUpdate(nextProps) {
    const isOpened = this.isOpened(nextProps);

    this.updatePageClass(isOpened);
    localforage.setItem(DESIGN_IS_OPEN, isOpened);
  }
  render() {
    const { design, dispatch } = this.props;

    if (this.isOpened(this.props)) {
      return (
        <DesignSettings
          {...design.toObject()}
          {...bindActionCreators({...designActions, ...popupActions}, dispatch)}
        />
      );
    }
    
    return null;
  }
  isOpened(props) {
    // TODO: User "reselect"
    return props.popups.some((popup) => (
      popup.get('style') === 'DesignSettings'
    ));
  }
  updatePageClass(isOpened) {
    if (isOpened) {
      $('.b-page').addClass('b-page--design-settings');
    } else {
      $('.b-page').removeClass('b-page--design-settings');
    }
  }
}

export default connectToRedux(DesignSettingsContainer);