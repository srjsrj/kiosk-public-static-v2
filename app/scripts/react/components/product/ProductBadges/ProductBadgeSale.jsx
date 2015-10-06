import React, { PropTypes } from 'react';
import ProductBadge from './ProductBadge';

export default class ProductBadgeSale {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    if (product.is_sale) {
      let title = 'SALE';

      if (product.sale_percent) {
        let salePercent = product.sale_percent;

        if (parseInt(salePercent, 10) === salePercent) {
          salePercent = parseInt(salePercent, 10);
        }

        title = `SALE - ${salePercent}%`;
      }

      return <ProductBadge text={title} status="sale" />;
    } else {
      return null;
    }
  }
}