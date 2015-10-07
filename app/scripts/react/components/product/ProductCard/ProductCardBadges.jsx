import React, { PropTypes } from 'react';
import ProductBadgeNew from '../ProductBadges/ProductBadgeNew';
import ProductBadgeSale from '../ProductBadges/ProductBadgeSale';

export default class ProductCardBadges {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    return (
      <div className="b-item__status">
        <ProductBadgeNew product={product} />
        <ProductBadgeSale product={product} />
      </div>
    );
  }
}