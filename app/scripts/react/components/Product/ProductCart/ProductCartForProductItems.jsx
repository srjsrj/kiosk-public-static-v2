import React, { PropTypes } from 'react';
import ProductGoods from '../ProductGoods';
import ProductProperties from '../ProductProperties';

export default class ProductCartForProductItems {
  static propTypes = {
    addWishlistUrl: PropTypes.string,
    isWishlisted: PropTypes.bool,
    onGoodChange: PropTypes.func,
    product: PropTypes.object.isRequired,
    wishlistUrl: PropTypes.string,
  }
  render() {
    const { product: { goods, properties } } = this.props;

    if (properties.length) {
      return (
        <ProductProperties
          {...this.props}
          goods={goods}
          properties={properties}
        />
      );
    } else {
      return (
        <ProductGoods {...this.props} />
      );
    }
  }
}