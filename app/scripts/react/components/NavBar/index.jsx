import React, { Component, PropTypes } from 'react';
import * as schemas from 'r/schemas';
import provideTranslations from 'rc/HoC/provideTranslations';
import NavBarContacts from './NavBarContacts';
import NavBarSearch from './NavBarSearch';
import Logo from 'rc/Logo';
import { Clientbar } from 'rc/Clientbar';

class NavBar extends Component {
  render() {
    const {
      clientBarProps,
      logoProps,
      vendor,
      searchQuery,
      t,
    } = this.props;

    return (
      <header className="b-header">
        <div className="b-header__container">
          <div className="b-header__content">
            <div className="b-header__desc">
              <NavBarContacts
                vendorContacts={vendor.contacts}
                vendorTitle={vendor.title}
              />
            </div>
            <div className="b-header__logo">
              <Logo {...logoProps} />
            </div>
            <div className="b-header__search">
              <NavBarSearch
                searchProductsPath={vendor.search_products_path}
                searchQuery={searchQuery}
                t={t}
              />
            </div>
            <Clientbar {...clientBarProps} />
          </div>
        </div>
      </header>
    );
  }
}

NavBar.propTypes = {
  clientBarProps: PropTypes.shape(Clientbar.wrapped.propTypes).isRequired,
  logoProps: PropTypes.shape(Logo.propTypes).isRequired,
  searchQuery: PropTypes.string,
  vendor: schemas.vendor.isRequired,
  t: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  clientBarProps: {},
  logoProps: {},
  vendor: {
    contacts: [],
    title: '',
    search_products_path: '',
  },
  searchQuery: '',
};

export default provideTranslations(NavBar);
