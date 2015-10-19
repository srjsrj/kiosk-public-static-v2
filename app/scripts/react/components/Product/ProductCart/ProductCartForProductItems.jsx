import React, { PropTypes } from 'react';
import ProductGoods from '../ProductGoods';
import ProductProperties from '../ProductProperties';

export default class ProductCartForProductItems {
  static propTypes = {
    onProductChange: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
  }
  render() {
    const { onProductChange, product: { goods, properties } } = this.props;

    if (properties.length) {
      return (
        <ProductProperties
          goods={goods}
          properties={properties}
        />
      );
    } else {
      return (
        <ProductGoods
          product={this.props.product}
          onProductChange={onProductChange}
        />
      );
    }
  }
}