import React, { PropTypes } from 'react';
import ProductBadge from './ProductBadge';

export default class ProductBadgeUnavailable {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    if (!product.has_ordering_goods && !product.is_run_out) {
      return <ProductBadge text="Не продается" status="sold" />;
    } else {
      return null;
    }
  }
}