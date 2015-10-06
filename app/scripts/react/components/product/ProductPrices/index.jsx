import React, { PropTypes } from 'react';
import { diff } from 'deep-diff';
import ProductGoodPrice from './ProductGoodPrice';
import ProductGoodPrices from './ProductGoodPrices';

export default class ProductPrices {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    if (product.goods && product.goods.length) {
      if (!diff(product.prices.min_price, product.prices.max_price)) {
        return <ProductGoodPrice good={product.goods[0]} />;
      } else {
        return <ProductGoodPrices prices={product.prices} />;
      }
    } else {
      return null;
    }
  }
}