import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import ProductGoodActualPrice from './ProductGoodActualPrice';
import HumanizedMoneyWithCurrency from '../../common/Money/HumanizedMoneyWithCurrency';

export default class ProductGoodPrice extends Component {
  static propTypes = {
    good: PropTypes.object.isRequired,
  }
  render() {
    const { good } = this.props;

    if (good.is_sale) {
      return (
        <span>
          <div className="b-item__price b_item_price_sale">
            <ProductGoodActualPrice good={good} />
          </div>
          <div className="b-item__price b-item__price_old">
            <HumanizedMoneyWithCurrency money={good.price} />
          </div>
        </span>
      );
    } else {
      const priceClasses = classNames('b-item__price', {
        'b-item__price_unknown': good.actual_price && good.actual_price.cents === 0,
      });

      return (
        <div className={priceClasses}>
          <ProductGoodActualPrice good={good} />
        </div>
      );
    }
  }
}