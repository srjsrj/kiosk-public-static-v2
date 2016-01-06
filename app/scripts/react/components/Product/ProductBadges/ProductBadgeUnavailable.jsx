import React, { Component, PropTypes } from 'react';
import translate from '../../HoC/translate';
import ProductBadge from './ProductBadge';

const ProductBadgeUnavailable = ({ product, t }) => (
  product.has_ordering_goods && !product.is_run_out
    ? <ProductBadge text={t('vendor.badges.not_available')} status="sold" />
    : <span />
);

ProductBadgeUnavailable.propTypes = {
  product: PropTypes.object.isRequired,
};

export default translate(ProductBadgeUnavailable);