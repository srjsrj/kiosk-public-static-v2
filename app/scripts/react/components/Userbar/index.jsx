import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import connectToRedux from '../HoC/connectToRedux';
import * as popupActions from '../../actions/popupActions';

import DesignSettings from '../DesignSettings';
import DesignPreview from '../DesignPreview';
import UserbarItem from './UserbarItem';

export default class Userbar {
  static propTypes = {
    operatorUrl: PropTypes.string.isRequired,
    openDesignSettingsPopup: PropTypes.func.isRequired
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