import React, { Component, PropTypes } from 'react';
import * as schemas from 'r/schemas';
import provideTranslations from 'r/HoC/provideTranslations';

class MenuTopMobile extends Component {
  renderSingle(item) {
    const {
      id,
      title,
      url,
    } = item;

    return (
      <li id={`mob_menu_item_li_${id}`} key={`mob-menu-item-${id}`}>
        <a href={url}>
          {title}
        </a>
      </li>
    );
  }
  renderWithChildren(item) {
    const {
      id,
      title,
      children,
    } = item;

    return (
      <li id={`mob_menu_item_li_${id}`} key={`mob-menu-item-${id}`}>
        <span>
          {title}
        </span>
        <ul>
          {children.map((child) => (
            <li id={`mob_menu_item_li_${child.id}`} key={`mob-menu-item-${child.id}`}>
              <a
                data-count={child.products_count}
                href={child.url}
              >
                {child.title}
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  }
  render() {
    const {
      hasClientCabinet,
      items,
      t,
      vendorCabinetPath,
    } = this.props;

    return (
      <div id="nav">
        <ul>
          {hasClientCabinet && (
            <li id="mob_menu_item_li_cabinet">
              <a href={vendorCabinetPath}>
                {t('vendor.client.cabinet.title')}
              </a>
            </li>
          )}
          {items.length > 0 && items.map((item) => (
            item.children.length > 0 ?
              this.renderWithChildren(item) :
              this.renderSingle(item)
          ))}
        </ul>
      </div>
    );
  }
}

MenuTopMobile.propTypes = {
  hasClientCabinet: PropTypes.bool,
  items: PropTypes.arrayOf(schemas.menuItem).isRequired,
  t: PropTypes.func.isRequired,
  vendorCabinetPath: PropTypes.string,
};

export default provideTranslations(MenuTopMobile);
