import React, { Component, PropTypes } from 'react';
import ProductBadge from './ProductBadge';

const ProductBadgeNew = ({ product, t }) => (
  product.is_label_new
    ? <ProductBadge text={t('vendor.badges.new')} status="sold" />
    : <span />
);

ProductBadgeNew.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductBadgeNew;