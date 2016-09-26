import React, { Component, PropTypes } from 'react';
import * as schemas from 'r/schemas';
import MenuBottomLink from './MenuBottomLink';
import provideTranslations from 'rc/HoC/provideTranslations';
import CurrencySwitcher from 'rc/CurrencySwitcher';
import LocaleSwitcher from 'rc/LocaleSwitcher';

class MenuBottom extends Component {
  isActive(item, activeItems) {
    return !!activeItems.filter((activeItem) => (
      item.id === activeItem.id && item.type === activeItem.type
    )).length;
  }
  renderList(items, activeItems) {
    return items.map((item) => (
      <MenuBottomLink
        isActive={this.isActive(item, activeItems)}
        item={item}
        key={`menu-bottom-link-${item.id}`}
      />
    ));
  }
  render() {
    const {
      currenciesIsoCodes,
      currentCurrency,
      currentLocale,
      i18n,
      locales,
      isVendorLandingLinkDisabled,
      leftActiveItems,
      leftItems,
      rightActiveItems,
      rightItems,
      t,
      vendorLandingLink,
    } = this.props;

    return (
      <div>
        <div className="b-footer__nav b-footer__nav_main">
          {this.renderList(leftItems, leftActiveItems)}
        </div>
        <div className="b-footer__nav b-footer__nav_soc">
          {this.renderList(rightItems, rightActiveItems)}
          {!isVendorLandingLinkDisabled && (
            <noindex>
              <a
                href={vendorLandingLink}
                id="made_in_kiiiosk"
                rel="nofollow"
                target="_blank"
              >
                {t('vendor.made_in_kiiiosk')}
              </a>
            </noindex>
          )}
          <CurrencySwitcher
            currenciesIsoCodes={currenciesIsoCodes}
            current={currentCurrency}
            i18n={i18n}
          />
          <LocaleSwitcher
            current={currentLocale}
            i18n={i18n}
            locales={locales}
          />
        </div>
      </div>
    );
  }
}

MenuBottom.propTypes = {
  currenciesIsoCodes: PropTypes.array,
  currentCurrency: PropTypes.string,
  currentLocale: PropTypes.string,
  i18n: PropTypes.object,
  isVendorLandingLinkDisabled: PropTypes.bool.isRequired,
  leftActiveItems: PropTypes.arrayOf(schemas.menuItem).isRequired,
  leftItems: PropTypes.arrayOf(schemas.menuItem).isRequired,
  locales: PropTypes.arrayOf(schemas.locale),
  rightActiveItems: PropTypes.arrayOf(schemas.menuItem).isRequired,
  rightItems: PropTypes.arrayOf(schemas.menuItem).isRequired,
  t: PropTypes.func.isRequired,
  vendorLandingLink: PropTypes.string,
};

MenuBottom.defaultProps = {
  isVendorLandingLinkDisabled: true,
};

export default provideTranslations(MenuBottom);
