import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class CartButton extends Component {
  static propTypes = {
    itemsCount: PropTypes.number,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }
  render() {
    const { itemsCount, text, url } = this.props;
    const buttonClasses = classNames({
      'b-cart-trigger': true,
      'b-cart-trigger_full': itemsCount && itemsCount > 0,
      'element--active-opacity': true,
    });

    return (
      <a className={buttonClasses} href={url}>
        {text && <span className="b-cart-trigger__text">{text}</span>}
        {itemsCount && <span className="b-cart-trigger__count">{itemsCount}</span>}
      </a>
    );
  }
}