import React, { PropTypes } from 'react';
import HumanizedMoneyWithCurrency from '../../common/Money/HumanizedMoneyWithCurrency';

export default class ProductGoodActualPrice {
  static propTypes = {
    good: PropTypes.object.isRequired,
  }
  render() {
    const { good } = this.props;

    if (good.actual_price.cents === 0) {
      return <span>{'Цена неизвестна'}</span>;
    } else {
      return <HumanizedMoneyWithCurrency money={good.actual_price} />;
    }
  }
}