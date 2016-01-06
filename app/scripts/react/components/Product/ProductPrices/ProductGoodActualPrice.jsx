import React, { PropTypes } from 'react';
import translate from '../../HoC/translate';
import HumanizedMoneyWithCurrency from '../../common/Money/HumanizedMoneyWithCurrency';

const ProductGoodActualPrice = ({ good, t }) => (
  good.actual_price
    ? <HumanizedMoneyWithCurrency money={good.actual_price} />
    : <span>{t('vendor.product.blank_price')}</span>
);

ProductGoodActualPrice.propTypes = {
  good: PropTypes.object.isRequired,
}

export default translate(ProductGoodActualPrice);