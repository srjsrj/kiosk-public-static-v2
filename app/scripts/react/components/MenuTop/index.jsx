import React, { Component, PropTypes } from 'react';
import * as schemas from 'r/schemas';
import MenuTopDesktop from './MenuTopDesktop';
import MenuTopMobile from './MenuTopMobile';
import MenuTopToggleButton from './MenuTopToggleButton';

class MenuTop extends Component {
  render() {
    const {
      activeItems,
      hasClientCabinet,
      items,
      t,
      vendorCabinetPath,
    } = this.props;

    return (
      <div>
        <MenuTopDesktop
          activeItems={activeItems}
          items={items}
        />
        <MenuTopToggleButton />
        <MenuTopMobile
          hasClientCabinet={hasClientCabinet}
          items={items}
          t={t}
          vendorCabinetPath={vendorCabinetPath}
        />
      </div>
    );
  }
}

MenuTop.propTypes = {
  activeItems: PropTypes.arrayOf(schemas.menuItem).isRequired,
  hasClientCabinet: PropTypes.bool,
  items: PropTypes.arrayOf(schemas.menuItem).isRequired,
  t: PropTypes.func.isRequired,
  vendorCabinetPath: PropTypes.string,
};