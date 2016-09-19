import React, { Component, PropTypes } from 'react';
import provideTranslations from '../HoC/provideTranslations';
import Wishlist from './Wishlist';
import * as schemas from '../../schemas';

class WishlistContainer extends Component {
  render() {
    return <Wishlist {...this.props} />;
  }
}

WishlistContainer.propTypes = {
  wishlistItems: PropTypes.arrayOf(schemas.wishlistItem).isRequired,
  initialCart: schemas.cartApi.isRequired,
  isPrivate: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

WishlistContainer.defaultProps = {
  wishlistItems: [],
  initialCart: {
    items: [],
    totalPrice: {},
    errors: {},
    default_url: '',
  },
  isPrivate: true,
};

export default provideTranslations(WishlistContainer);
