import React, { Component, PropTypes } from 'react';
import Icon from '../../common/Icon';

export default class ProductCartWishlist extends Component {
  static propTypes = {
    addWishlistText: PropTypes.string,
    addWishlistUrl: PropTypes.string,
    goWishlistText: PropTypes.string,
    hasWishlist: PropTypes.bool,
    isWishlisted: PropTypes.bool,
    wishlistUrl: PropTypes.string,
  }
  render() {
    const {
      addWishlistText, addWishlistUrl, goWishlistText, hasWishlist,
      isWishlisted, wishlistUrl,
    } = this.props;

    if (hasWishlist && wishlistUrl) {
      let content;

      if (isWishlisted) {
        content = (
          <a href={wishlistUrl} rel="nofollow">
            <Icon active={true} name="wishlist" />
            {goWishlistText}
          </a>
        );
      } else {
        content = (
          <a href={addWishlistUrl} rel="nofollow">
            <Icon active={true} name="wishlist" />
            {addWishlistText}
          </a>
        );
      }

      return (
        <div className="add-to-wishlist">
          {content}
        </div>
      );
    }

    return null;
  }
}