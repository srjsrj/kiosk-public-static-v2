import React, { PropTypes } from 'react';

export default class ProductCardTitle {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    return (
      <h1 className="b-item-full__title">
        {product.h1 || product.name || product.title}
        <span className="b-item-full__articul" product-article={true}>
          {product.article}
        </span>
      </h1>
    );
  }
}