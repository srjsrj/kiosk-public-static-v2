import React, { Component, PropTypes } from 'react';
import makeTranslatable from '../../HoC/makeTranslatable';
import ProductBlockImage from './ProductBlockImage';
import ProductBlockBadges from './ProductBlockBadges';
import ProductPrices from '../ProductPrices';

@makeTranslatable
class ProductBlock extends Component {
  render() {
    const { product } = this.props;

    return (
      <div className={process.env.KIOSK_CSS_PREFIX + 'b-item-list__item'}>
        <a
          className={process.env.KIOSK_CSS_PREFIX + 'b-item'}
          href={product.public_url}
        >
          <div className={process.env.KIOSK_CSS_PREFIX + 'b-item__pic-wrap'}>
            <ProductBlockImage product={product} />
            <ProductBlockBadges product={product} />
          </div>
          <div className={process.env.KIOSK_CSS_PREFIX + 'b-item__info'}>
            <h2 className={process.env.KIOSK_CSS_PREFIX + 'b-item__name'}>
              {product.title}
            </h2>
            {!!product.short_details &&
              <div className={process.env.KIOSK_CSS_PREFIX + 'b-item__details'}>
                {product.short_details}
              </div>
            }
            <ProductPrices product={product} />
          </div>
        </a>
      </div>
    );
  }
}

ProductBlock.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductBlock;