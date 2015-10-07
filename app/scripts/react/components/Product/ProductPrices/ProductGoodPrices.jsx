import React, { PropTypes } from 'react';
import HumanizedMoney from '../../common/Money/HumanizedMoney';
import HumanizedMoneyWithCurrency from '../../common/Money/HumanizedMoneyWithCurrency';

export default class ProductGoodPrices {
  static propTypes = {
    prices: PropTypes.object.isRequired,
  }
  render() {
    const { prices } = this.props;

    return (
      <div className="b-item__price">
        <HumanizedMoney money={prices.min_price} />
        &nbsp;&mdash;&nbsp;
        <HumanizedMoneyWithCurrency money={prices.max_price} />
      </div>
    );
  }
}