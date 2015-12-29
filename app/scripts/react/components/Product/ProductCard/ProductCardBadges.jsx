import React, { Component, PropTypes } from 'react';
import ProductBadgeNew from '../ProductBadges/ProductBadgeNew';
import ProductBadgeSale from '../ProductBadges/ProductBadgeSale';

export default class ProductCardBadges extends Component {
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