import React, { Component, PropTypes } from 'react';
import { CartButton } from '../buttons/CartButton';
import { WishlistButton } from '../buttons/WishlistButton';

export default class ClientBar extends Component {
  static propTypes = {
    cartItemsCount: PropTypes.number,
    cartText: PropTypes.string.isRequired,
    cartUrl: PropTypes.string.isRequired,
    wishlistText: PropTypes.string,
    wishlistUrl: PropTypes.string,
  }
  render() {
    const { cartItemsCount, cartText, cartUrl, wishlistText, wishlistUrl } = this.props;

    return (
      <div className="client-bar">
        {wishlistUrl &&
          <WishlistButton
            text={wishlistText}
            url={wishlistUrl}
          />
        }
        {cartUrl &&
          <CartButton
            itemsCount={cartItemsCount}
            text={cartText}
            url={cartUrl}
          />
        }
      </div>
    );
  }
}