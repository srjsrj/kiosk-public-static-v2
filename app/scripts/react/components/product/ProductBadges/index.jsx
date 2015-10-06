import React, { PropTypes } from 'react';
import ProductBadgeNew from './ProductBadgeNew';
import ProductBadgeSale from './ProductBadgeSale';
import ProductBadgeSoldOut from './ProductBadgeSoldOut';
import ProductBadgeUnavailable from './ProductBadgeUnavailable';

export default class ProductBadges {
  static propTypes = {
    product: PropTypes.object.isRequired,
    showUnavailable: PropTypes.bool,
  }
  render() {
    const { product, showUnavailable } = this.props;

    return (
      <div className="b-item__status">
        <ProductBadgeNew product={product} />
        {showUnavailable &&
          <ProductBadgeSoldOut product={product} />
        }
        {
          // Закомментировано в product_helper.rb
          // <ProductBadgePreorder product={product} />
        }
        <ProductBadgeSale product={product} />
        {showUnavailable &&
          <ProductBadgeUnavailable product={product} />
        }
      </div>
    );
  }
}