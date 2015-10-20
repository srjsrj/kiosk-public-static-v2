import React, { PropTypes } from 'react';
import ProductGoods from '../ProductGoods';
import ProductProperties from '../ProductProperties';

export default class ProductCartForProductItems {
  static propTypes = {
    onGoodChange: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
  }
  render() {
    const { onGoodChange, product: { goods, properties } } = this.props;

    if (properties.length) {
      return (
        <ProductProperties
          goods={goods}
          onGoodChange={onGoodChange}
          properties={properties}
        />
      );
    } else {
      return (
        <ProductGoods
          product={this.props.product}
          onGoodChange={onGoodChange}
        />
      );
    }
  }
}