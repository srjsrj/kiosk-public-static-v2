import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import connectToRedux from '../HoC/connectToRedux';
import * as popupActions from '../../actions/popupActions';

import UserbarItem from './UserbarItem';

export default class Userbar {
  static propTypes = {
    openDesignSettingsPopup: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="userbar">
        <UserbarItem
          url="/admin"
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
    dispatch: PropTypes.func.isRequired
  }
  render() {
    const { dispatch } = this.props;
    return (
      <Userbar {...bindActionCreators(popupActions, dispatch)} />
    );
  }
}

export default connectToRedux(UserbarContainer);