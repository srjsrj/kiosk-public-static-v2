import React, { PropTypes } from 'react';
import { t } from 'i18next';
import HumanizedMoneyWithCurrency from '../../common/Money/HumanizedMoneyWithCurrency';

export default class ProductGoodActualPrice {
  static propTypes = {
    good: PropTypes.object.isRequired,
  }
  render() {
    const { good } = this.props;

    if (good.actual_price) {
      return <HumanizedMoneyWithCurrency money={good.actual_price} />;
    } else {
      return <span>{t('vendor.product.blank_price')}</span>;
    }
  }
}