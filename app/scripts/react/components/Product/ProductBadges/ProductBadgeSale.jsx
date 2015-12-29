import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';
import ProductBadge from './ProductBadge';

export default class ProductBadgeSale extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    if (product.is_sale) {
      let title = t('vendor.badges.sale');

      if (product.sale_percent) {
        let salePercent = product.sale_percent;

        if (parseInt(salePercent, 10) === salePercent) {
          salePercent = parseInt(salePercent, 10);
        }

        title = t('vendor.badges.sale_percent', { percent: salePercent });
      }

      return <ProductBadge text={title} status="sale" />;
    } else {
      return null;
    }
  }
}