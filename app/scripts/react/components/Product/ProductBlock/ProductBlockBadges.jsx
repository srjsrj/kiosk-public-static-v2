import React, { Component, PropTypes } from 'react';
import ProductBadgeNew from '../ProductBadges/ProductBadgeNew';
import ProductBadgeSale from '../ProductBadges/ProductBadgeSale';
import ProductBadgeSoldOut from '../ProductBadges/ProductBadgeSoldOut';
import ProductBadgeUnavailable from '../ProductBadges/ProductBadgeUnavailable';

export default class ProductBlockBadges extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    return (
      <div className="b-item__status">
        <ProductBadgeNew product={product} />
        <ProductBadgeSoldOut product={product} />
        <ProductBadgeSale product={product} />
        <ProductBadgeUnavailable product={product} />
      </div>
    );
  }
}