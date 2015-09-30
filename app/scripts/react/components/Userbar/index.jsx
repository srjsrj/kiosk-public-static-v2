import React, { PropTypes } from 'react';
import store from 'store';
import * as storageKeys from '../../constants/storageKeys';
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
      if (store.get(storageKeys.DESIGN_IS_OPEN)) {
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