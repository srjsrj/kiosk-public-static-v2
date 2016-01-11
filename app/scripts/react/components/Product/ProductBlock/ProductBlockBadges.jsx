import React, { PropTypes } from 'react';
import ProductBadgeNew from '../ProductBadges/ProductBadgeNew';
import ProductBadgeSale from '../ProductBadges/ProductBadgeSale';
import ProductBadgeSoldOut from '../ProductBadges/ProductBadgeSoldOut';
import ProductBadgeUnavailable from '../ProductBadges/ProductBadgeUnavailable';

const ProductBlockBadges = ({ product, t }) => (
  <div className="b-item__status">
    <ProductBadgeNew product={product} t={t} />
    <ProductBadgeSoldOut product={product} t={t} />
    <ProductBadgeSale product={product} t={t} />
    <ProductBadgeUnavailable product={product} t={t} />
  </div>
);

ProductBlockBadges.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductBlockBadges;