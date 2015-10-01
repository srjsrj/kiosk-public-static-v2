import React, { PropTypes } from 'react';
import Cookies from 'cookies-js';
import * as cookieKeys from '../../constants/cookieKeys';
import UserbarItem from './UserbarItem';

export default class Userbar {
  static propTypes = {
    operatorUrl: PropTypes.string.isRequired,
    isDesignOpen: PropTypes.bool,
    openDesignSettingsPopup: PropTypes.func.isRequired,
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
    const { openDesignSettingsPopup, operatorUrl } = this.props;
    return (
      <div className="userbar">
        <UserbarItem url={operatorUrl} className="userbar__button--admin" />
        <UserbarItem className="userbar__button--design" onClick={openDesignSettingsPopup} />
      </div>
    );
  }
}