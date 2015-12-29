import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';
import ProductBadge from './ProductBadge';

export default class ProductBadgeSoldOut extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    if (product.is_sold) {
      return <ProductBadge text={t('vendor.badges.sold')} status="sold" />;
    } else {
      return null;
    }
  }
}