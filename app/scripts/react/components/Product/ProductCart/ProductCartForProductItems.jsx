import React, { PropTypes } from 'react';
import ProductProperties from '../ProductProperties';

export default class ProductCartForProductItems {
  static propTypes = {
    onProductChange: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product: { goods, properties } } = this.props;

    return (
      <ProductProperties
        goods={goods}
        properties={properties}
      />
    );
  }
}