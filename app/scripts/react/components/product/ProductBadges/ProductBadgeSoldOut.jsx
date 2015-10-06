import React, { PropTypes } from 'react';
import ProductBadge from './ProductBadge';

export default class ProductBadgeSoldOut {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    if (product.is_sold) {
      return <ProductBadge text="Продано" status="sold" />;
    } else {
      return null;
    }
  }
}