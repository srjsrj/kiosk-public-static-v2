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
  wishlistItems: [
    {
      good: {
        id: 1,
        add_to_cart_url: '/good/add_to_cart/1',
        long_title: 'good 1 long title',
        price: {
          cents: 1000,
          currency_iso_code: 'RUB',
        },
        custom_attributes: {
          'attr 1.1': 'value 1.1',
          'attr 1.2': 'value 1.2',
        },
      },
      product: {
        title: 'product 1',
      },
      destroy_url: '/destroy/1',
    },
    {
      good: {
        id: 2,
        add_to_cart_url: '/good/add_to_cart/2',
        long_title: 'good 2 long title',
        price: {
          cents: 2000,
          currency_iso_code: 'RUB',
        },
        custom_attributes: {
          'attr 2.1': 'value 2.1',
          'attr 2.2': 'value 2.2',
        },
      },
      product: {
        title: 'product 2',
      },
    },
  ],
  initialCart: {
    items: [
      {
        good: {
          id: 1,
        },
      },
      {
        good: {
          id: 3,
        },
      },
    ],
  },
  isPrivate: false,
};

export default provideTranslations(WishlistContainer);
