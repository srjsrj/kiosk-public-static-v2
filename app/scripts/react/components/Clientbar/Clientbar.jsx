import React, { Component, PropTypes } from 'react';
import { CabinetButton } from '../buttons/CabinetButton';
import { WishlistButton } from '../buttons/WishlistButton';
import CartButtonController from '../buttons/CartButton/CartButtonController';

class Clientbar extends Component {
  render() {
    const {
      cabinetText, cabinetUrl, cartText, cartUrl, cartItems, showFullBasketCount,
      hasCabinet, hasCart, hasWishlist, wishlistText, wishlistUrl,
    } = this.props;

    return (
      <div className="Clientbar">
        {hasCabinet && cabinetUrl &&
          <CabinetButton
            text={cabinetText}
            url={cabinetUrl}
          />
        }
        {hasWishlist && wishlistUrl &&
          <WishlistButton
            text={wishlistText}
            url={wishlistUrl}
          />
        }
        {hasCart && cartUrl &&
          <CartButtonController
            cartItems={cartItems}
            text={cartText}
            url={cartUrl}
            showFullBasketCount={showFullBasketCount}
          />
        }
      </div>
    );
  }
}

Clientbar.propTypes = {
  cabinetText: PropTypes.string,
  cabinetUrl: PropTypes.string,
  cartItems: PropTypes.array,
  cartText: PropTypes.string,
  cartUrl: PropTypes.string,
  hasCabinet: PropTypes.bool,
  hasCart: PropTypes.bool,
  hasWishlist: PropTypes.bool,
  wishlistText: PropTypes.string,
  wishlistUrl: PropTypes.string,
  showFullBasketCount: PropTypes.bool
};
Clientbar.defaultProps = {
  hasCabinet: false,
  hasCart: false,
  hasWishlist: false,
  showFullBasketCount: false
}

export default Clientbar;
