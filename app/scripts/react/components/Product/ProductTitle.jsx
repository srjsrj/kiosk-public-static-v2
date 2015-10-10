import React, { PropTypes } from 'react';

export default class ProductTitle {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    return (
      <span>
        {product.h1 || product.name || product.title} {}
      </span>
    );
  }
}