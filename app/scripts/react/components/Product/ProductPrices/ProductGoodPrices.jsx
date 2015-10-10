import React, { PropTypes } from 'react';
import HumanizedMoney from '../../common/Money/HumanizedMoney';
import HumanizedMoneyWithCurrency from '../../common/Money/HumanizedMoneyWithCurrency';

export default class ProductGoodPrices {
  static propTypes = {
    minPrice: PropTypes.object.isRequired,
    maxPrice: PropTypes.object.isRequired,
  }
  render() {
    const { minPrice, maxPrice } = this.props;

    return (
      <div className="b-item__price">
        <HumanizedMoney money={minPrice} />
        &nbsp;&mdash;&nbsp;
        <HumanizedMoneyWithCurrency money={maxPrice} />
      </div>
    );
  }
}