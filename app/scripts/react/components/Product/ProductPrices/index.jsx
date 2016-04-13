import React, { Component, PropTypes } from 'react';
import { diff } from 'deep-diff';
import ProductGoodPrice from './ProductGoodPrice';
import ProductGoodPrices from './ProductGoodPrices';

class ProductPrices extends Component {
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
  render() {
    const { good, product, t } = this.props;

    if (good) {
      return (
        <ProductGoodPrice good={good} product={product} t={t} />
      );
    } else if (product.has_ordering_goods) {
      const maxPrice = this.getMaxPrice(product.goods);
      const minPrice = this.getMinPrice(product.goods);

      if (diff(minPrice, maxPrice)) {
        return (
          <ProductGoodPrices minPrice={minPrice} maxPrice={maxPrice} />
        );
      }else {
        return (
          <ProductGoodPrice good={product.goods[0]} product={product} t={t} />
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
