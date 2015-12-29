import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';
import ProductBadge from './ProductBadge';

export default class ProductBadgeNew extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    if (product.is_label_new) {
      return <ProductBadge text={t('vendor.badges.new')} status="sold" />;
    } else {
      return null;
    }
  }
}