import React from 'react';
import PropTypes from 'propTypes';
import ProductBadgeNew from '../ProductBadges/ProductBadgeNew';
import ProductBadgeSale from '../ProductBadges/ProductBadgeSale';

export default class ProductCardBadges {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    return (
      <span>
        <ProductBadgeNew product={product} />
        <ProductBadgeSale product={product} />
      </span>
    );
  }
}