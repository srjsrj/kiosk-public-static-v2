import React, { Component, PropTypes } from 'react';
import WishlistItem from './WishlistItem';
import schemas from '../../schemas';

class WishlistList extends Component {
  render() {
    const {
      wishlistItems,
      initialCart,
      isPrivate,
      t,
    } = this.props;

    return (
      <ul className="b-cart__list">
        {wishlistItems.map((item) => {
          const isInCart = true;

          return (
            <WishlistItem
              isInCart={isInCart}
              isPrivate={isPrivate}
              item={item}
              t={t}
            />
          );
        })}
      </ul>
    );
  }
}

WishlistList.propTypes = {
  wishlistItems: PropTypes.arrayOf(schemas.wishlistItem).isRequired,
  initialCart: schemas.cartApi.isRequired,
  isPrivate: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default WishlistList;
