import React, { Component, PropTypes } from 'react';
import * as schemas from 'r/schemas';
import classNames from 'classnames';

class MenuBottomLink extends Component {
  render() {
    const {
      isActive,
      item: {
        id,
        title,
        url,
        link_target,
        products_count,
      },
    } = this.props;
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
}

MenuBottomLink.propTypes = {
  isActive: PropTypes.bool.isRequired,
  item: schemas.menuItem.isRequired,
};

MenuBottomLink.defaultProps = {
  isActive: false,
};

export default MenuBottomLink;
