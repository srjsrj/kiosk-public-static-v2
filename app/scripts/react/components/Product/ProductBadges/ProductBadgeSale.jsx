import React, { PropTypes } from 'react';
import translate from '../../HoC/translate';
import ProductBadge from './ProductBadge';

const ProductBadgeSale = ({ product, t }) => {
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
  }

  return <span />;
};

ProductBadgeSale.propTypes = {
  product: PropTypes.object.isRequired,
};

export default translate(ProductBadgeSale);