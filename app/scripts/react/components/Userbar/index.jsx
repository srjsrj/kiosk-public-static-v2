import React, { PropTypes } from 'react';
import Cookies from 'cookies-js';
import * as cookieKeys from '../../constants/cookieKeys';
import UserbarItem from './UserbarItem';

export default class Userbar {
  static propTypes = {
    designParamName: PropTypes.string.isRequired,
    designMode: PropTypes.string.isRequired,
    openDesignSettingsPopup: PropTypes.func.isRequired,
    operatorUrl: PropTypes.string.isRequired,
  }
  componentDidMount() {
    const { designMode, openDesignSettingsPopup } = this.props;

    switch(designMode) {
      case 'auto':
        if (Cookies.get(cookieKeys.DESIGN_IS_OPEN) === 'true') {
          openDesignSettingsPopup();
        }
        break;
      case 'open':
        openDesignSettingsPopup();
        Cookies.set(cookieKeys.DESIGN_IS_OPEN, true);
        break;
      case 'close':
        Cookies.set(cookieKeys.DESIGN_IS_OPEN, false);
        break;
    }
  }
  render() {
    const { designParamName, openDesignSettingsPopup, operatorUrl } = this.props;

    return (
      <div className="userbar">
        <UserbarItem
          className="userbar__button--admin"
          url={operatorUrl}
        />
        <UserbarItem
          className="userbar__button--design"
          onClick={openDesignSettingsPopup}
        />
      </div>
    );
  }
}