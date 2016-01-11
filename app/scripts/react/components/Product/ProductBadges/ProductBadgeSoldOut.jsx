import React, { PropTypes } from 'react';
import ProductBadge from './ProductBadge';

const ProductBadgeSoldOut = ({ product, t }) => (
  product.is_sold
    ? <ProductBadge text={t('vendor.badges.sold')} status="sold" />
    : <span />
);

ProductBadgeSoldOut.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductBadgeSoldOut;