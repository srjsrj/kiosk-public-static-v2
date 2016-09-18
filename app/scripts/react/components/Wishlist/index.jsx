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
        default_url: '/good/1',
        long_title: 'good 1 long title',
        has_ordering_goods: true,
        is_sale: false,
        price: {
          cents: 1000,
          currency_iso_code: 'RUB',
        },
        custom_attributes: {
          'attr 1.1': 'value 1.1',
          'attr 1.2': 'value 1.2',
        },
        image: {
          url: '',
        },
      },
      product: {
        id: 1,
        title: 'product 1',
        has_ordering_goods: true,
      },
      destroy_url: '/destroy/1',
    },
    {
      good: {
        id: 2,
        add_to_cart_url: '/good/add_to_cart/2',
        default_url: '/good/2',
        long_title: 'good 2 long title',
        has_ordering_goods: true,
        is_sale: false,
        price: {
          cents: 2000,
          currency_iso_code: 'RUB',
        },
        image: {
          url: '',
        },
        custom_attributes: {
          'attr 2.1': 'value 2.1',
          'attr 2.2': 'value 2.2',
        },
      },
      product: {
        id: 2,
        title: 'product 2',
        has_ordering_goods: true,
      },
      destroy_url: '/destroy/2',
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
    totalPrice: {
      cents: 5000,
      currency_iso_code: 'RUB',
    },
  },
  isPrivate: true,
};

export default provideTranslations(WishlistContainer);
