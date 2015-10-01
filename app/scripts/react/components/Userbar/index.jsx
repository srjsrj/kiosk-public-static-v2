import React, { PropTypes } from 'react';
import Cookies from 'cookies-js';
import * as cookieKeys from '../../constants/cookieKeys';
import UserbarItem from './UserbarItem';

export default class Userbar {
  static propTypes = {
    designParamName: PropTypes.string.isRequired,
    isDesignOpen: PropTypes.bool,
    openDesignSettingsPopup: PropTypes.func.isRequired,
    operatorUrl: PropTypes.string.isRequired,
  }
  componentDidMount() {
    const { isDesignOpen, openDesignSettingsPopup } = this.props;

    if (isDesignOpen === true) {
      openDesignSettingsPopup();
      Cookies.set(cookieKeys.DESIGN_IS_OPEN, true);
    } else if (isDesignOpen === false) {
      Cookies.set(cookieKeys.DESIGN_IS_OPEN, false);
    } else {
      if (Cookies.get(cookieKeys.DESIGN_IS_OPEN) === 'true') {
        openDesignSettingsPopup();
      }
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