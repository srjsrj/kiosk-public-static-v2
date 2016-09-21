import React, { Component, PropTypes } from 'react';
import * as schemas from 'r/schemas';
import classNames from 'classnames';
import provideTranslations from 'rc/HoC/provideTranslations';

class MenuBottom extends Component {
  isActive(item, activeItems) {
    return !!activeItems.filter((activeItem) => (
      item.id === activeItem.id && item.type === activeItem.type
    )).length;
  }
  renderLink(item, isActive=false) {
    const {
      id,
      title,
      url,
      link_target,
      products_count,
    } = item;
    const aClasses = classNames({
      'b-footer__link': true,
      'b-footer__link__active': isActive,
    });

    return (
      <a
        className={aClasses}
        data-count={products_count}
        href={url}
        id={`menu_item_link_${id}`}
        key={`bottom-menu-${id}`}
        target={link_target}
      >
        {title}
      </a>
    );
  }
  renderList(items, activeItems) {
    return items.map((item) => this.renderLink(item, this.isActive(item, activeItems)));
  }
  render() {
    const {
      isExternalLinkDisabled,
      leftActiveItems,
      leftItems,
      rightActiveItems,
      rightItems,
      t,
      vendorActiveDomain,
    } = this.props;

    return (
      <div>
        <div className="b-footer__nav b-footer__nav_main">
          {this.renderList(leftItems, leftActiveItems)}
        </div>
        <div className="b-footer__nav b-footer__nav_soc">
          {this.renderList(rightItems, rightActiveItems)}
          {!isExternalLinkDisabled && (
            <noindex>
              <a
                href={`http://kiiiosk.ru/lp1?utm_source=kiosk_shop&utm_campaign=${vendorActiveDomain}`}
                id="made_in_kiiiosk"
                rel="nofollow"
                target="_blank"
              >
                {t('vendor.made_in_kiiiosk')}
              </a>
            </noindex>
          )}
        </div>
      </div>
    );
  }
}

MenuBottom.propTypes = {
  isExternalLinkDisabled: PropTypes.bool.isRequired,
  leftActiveItems: PropTypes.arrayOf(schemas.menuItem).isRequired,
  leftItems: PropTypes.arrayOf(schemas.menuItem).isRequired,
  rightActiveItems: PropTypes.arrayOf(schemas.menuItem).isRequired,
  rightItems: PropTypes.arrayOf(schemas.menuItem).isRequired,
  t: PropTypes.func.isRequired,
  vendorActiveDomain: PropTypes.string,
};

MenuBottom.defaultProps = {
  isExternalLinkDisabled: true,
};

export default provideTranslations(MenuBottom);
