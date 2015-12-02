import React, { PropTypes } from 'react';
import classNames from 'classnames';
import ProductGoodActualPrice from './ProductGoodActualPrice';
import HumanizedMoneyWithCurrency from '../../common/Money/HumanizedMoneyWithCurrency';

export default class ProductGoodPrice {
  static propTypes = {
    good: PropTypes.object.isRequired,
  }
  render() {
    const { good } = this.props;

    if (good.is_sale) {
      return (
        <span>
          <div className={process.env.KIOSK_CSS_PREFIX + 'b-item__price ' + process.env.KIOSK_CSS_PREFIX + 'b_item_price_sale'}>
            <ProductGoodActualPrice good={good} />
          </div>
          <div className={process.env.KIOSK_CSS_PREFIX + 'b-item__price ' + process.env.KIOSK_CSS_PREFIX + 'b-item__price_old'}>
            <HumanizedMoneyWithCurrency money={good.price} />
          </div>
        </span>
      );
    } else {
      const priceClasses = classNames({
        [process.env.KIOSK_CSS_PREFIX + 'b-item__price']: true,
        [process.env.KIOSK_CSS_PREFIX + 'b-item__price_unknown']: good.actual_price && good.actual_price.cents === 0,
      });

      return (
        <div className={priceClasses}>
          <ProductGoodActualPrice good={good} />
        </div>
      );
    }
  }
}