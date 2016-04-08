import React, { Component, PropTypes } from 'react';
import { diff } from 'deep-diff';
import ProductGoodPrice from './ProductGoodPrice';
import ProductGoodPrices from './ProductGoodPrices';

class ProductPrices extends Component {
  constructor(props) {
    super(props);
    if (props.good){
      this.good = props.good;
    }else if (props.product.has_ordering_goods){
      this.good = props.product.goods[0];
    }
    if (this.good){
      this.good.final_actual_price = {
        cents: this.good.actual_price.cents,
        currency_iso_code: this.good.actual_price.currency_iso_code
      }
    }
  }
  getMinPrice(goods) {
    let minPrice = goods[0].actual_price;

    for (let i = 1; i < goods.length; i++) {
      const good = goods[i];

      if (good.actual_price.cents < minPrice.cents) {
        minPrice = good.actual_price;
      }
    };

    return minPrice;
  }
  getMaxPrice(goods) {
    let maxPrice = goods[0].actual_price;

    for (let i = 1; i < goods.length; i++) {
      const good = goods[i];

      if (good.actual_price.cents > maxPrice.cents) {
        maxPrice = good.actual_price;
      }
    };

    return maxPrice;
  }
  onWeightChange(value) {
    this.good.final_actual_price.cents = this.good.actual_price.cents * parseFloat(value);
    this.forceUpdate();
  }
  render() {
    const { product, t } = this.props;

    if (this.good) {
      return (
        <ProductGoodPrice good={this.good} t={t} />
      );
    } else if (product.has_ordering_goods) {
      const maxPrice = this.getMaxPrice(product.goods);
      const minPrice = this.getMinPrice(product.goods);

      if (diff(minPrice, maxPrice)) {
        return (
          <ProductGoodPrices minPrice={minPrice} maxPrice={maxPrice} />
        );
      }
    }

    return null;
  }
}

ProductPrices.propTypes = {
  good: PropTypes.object,
  product: PropTypes.object.isRequired,
};

export default ProductPrices;
