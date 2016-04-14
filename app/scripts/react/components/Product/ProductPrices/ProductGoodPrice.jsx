import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import ProductGoodActualPrice from './ProductGoodActualPrice';
import HumanizedMoneyWithCurrency from '../../common/Money/HumanizedMoneyWithCurrency';

class ProductGoodPrice extends Component {
  static propTypes = {
    good: PropTypes.object.isRequired,
  }
  renderWeightOfPrice(product, t){
    if (product.selling_by_weight && product.weight_of_price){
      return (
        <span>
          &nbsp;/&nbsp;{product.weight_of_price} {t('vendor.product.kg')}
        </span>
      );
    }else{
      return null;
    }
  }
  render() {
    const { product, good, t } = this.props;

    if (good.is_sale) {
      return (
        <span>
          <div className="b-item__price b_item_price_sale">
            <ProductGoodActualPrice good={good} t={t} />
            {this.renderWeightOfPrice(product, t)}
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
          <ProductGoodActualPrice good={good} product={product} t={t} />
          {this.renderWeightOfPrice(product, t)}
        </div>
      );
    }
  }
}

export default ProductGoodPrice;
