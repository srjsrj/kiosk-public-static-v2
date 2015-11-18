import React, { PropTypes } from 'react';
import ProductGoods from '../ProductGoods';
import ProductProperties from '../ProductProperties';

export default class ProductCartForProductItems {
  static propTypes = {
    onGoodChange: PropTypes.func,
    product: PropTypes.object.isRequired,
    wishlistUrl: PropTypes.string,
  }
  render() {
    const { onGoodChange, product: { goods, properties }, wishlistUrl } = this.props;

    if (properties.length) {
      return (
        <ProductProperties
          goods={goods}
          onGoodChange={onGoodChange}
          properties={properties}
          wishlistUrl={wishlistUrl}
        />
      );
    } else {
      return (
        <ProductGoods
          product={this.props.product}
          onGoodChange={onGoodChange}
          wishlistUrl={wishlistUrl}
        />
      );
    }
  }
}