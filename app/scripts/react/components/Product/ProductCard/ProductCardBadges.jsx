import React, { Component, PropTypes } from 'react';

import ProductBadgeNew from '../ProductBadges/ProductBadgeNew';
import ProductBadgeSale from '../ProductBadges/ProductBadgeSale';

const ProductCardBadges = ({ product, t }) => (
  <span>
    <ProductBadgeNew product={product} t={t} />
    <ProductBadgeSale product={product} t={t} />
  </span>
);

ProductCardBadges.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCardBadges;