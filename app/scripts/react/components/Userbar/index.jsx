import React, { PropTypes } from 'react';
import localforage from 'localforage';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import connectToRedux from '../HoC/connectToRedux';
import * as popupActions from '../../actions/popupActions';
import { DESIGN_IS_OPEN } from '../../constants/storageKeys';

import DesignSettings from '../DesignSettings';
import DesignPreview from '../DesignPreview';
import UserbarItem from './UserbarItem';

export default class Userbar {
  static propTypes = {
    operatorUrl: PropTypes.string.isRequired,
    isDesignOpen: PropTypes.bool,
    openDesignSettingsPopup: PropTypes.func.isRequired,
  }
  componentDidMount() {
    const { isDesignOpen, openDesignSettingsPopup } = this.props;

    if (isDesignOpen) {
      openDesignSettingsPopup();
    } else if (isDesignOpen === null) {
      localforage.getItem(DESIGN_IS_OPEN, (err, value) => {
        if (value) openDesignSettingsPopup();
      });
    }
  }
  render() {
    return (
      <div className="userbar">
        <UserbarItem
          url={this.props.operatorUrl}
          className="userbar__button--admin"
        />
        <UserbarItem
          className="userbar__button--design"
          onClick={this.props.openDesignSettingsPopup}
        />
      </div>
    );
  }
}

@connect(() => ({}))
class UserbarContainer {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    operatorUrl: PropTypes.string.isRequired
  }
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <Userbar
          {...this.props}
          {...bindActionCreators(popupActions, dispatch)}
        />
        <DesignSettings />
        <DesignPreview />
      </div>
    );
  }
}

export default connectToRedux(UserbarContainer);