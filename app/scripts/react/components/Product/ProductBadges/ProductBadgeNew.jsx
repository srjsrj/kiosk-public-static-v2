import React, { PropTypes } from 'react';
import ProductBadge from './ProductBadge';

export default class ProductBadgeNew {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    if (product.is_label_new) {
      return <ProductBadge text="Новинка" status="sold" />;
    } else {
      return null;
    }
  }
}