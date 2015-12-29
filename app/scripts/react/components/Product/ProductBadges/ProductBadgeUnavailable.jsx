import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';
import ProductBadge from './ProductBadge';

export default class ProductBadgeUnavailable extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    if (!product.has_ordering_goods && !product.is_run_out) {
      return <ProductBadge text={t('vendor.badges.not_available')} status="sold" />;
    } else {
      return null;
    }
  }
}