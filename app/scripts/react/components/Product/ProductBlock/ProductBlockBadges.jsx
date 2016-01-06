import React, { PropTypes } from 'react';
import ProductBadgeNew from '../ProductBadges/ProductBadgeNew';
import ProductBadgeSale from '../ProductBadges/ProductBadgeSale';
import ProductBadgeSoldOut from '../ProductBadges/ProductBadgeSoldOut';
import ProductBadgeUnavailable from '../ProductBadges/ProductBadgeUnavailable';

const ProductBlockBadges = ({ product }) => (
  <div className="b-item__status">
    <ProductBadgeNew product={product} />
    <ProductBadgeSoldOut product={product} />
    <ProductBadgeSale product={product} />
    <ProductBadgeUnavailable product={product} />
  </div>
);

ProductBlockBadges.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductBlockBadges;