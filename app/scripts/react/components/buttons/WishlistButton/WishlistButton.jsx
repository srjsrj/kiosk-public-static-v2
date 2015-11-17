import React, { Component, PropTypes } from 'react';

export default class WishlistButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }
  render() {
    const { text, url } = this.props;

    return (
      <a
        className="b-cart-trigger b-cart-trigger_wishlist element--active-opacity"
        href={this.props.url}
      >
        {text && <span className="b-cart-trigger__text">{text}</span>}
      </a>
    );
  }
}