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
      <div className="b-item-list__item">
        <a className="b-item" href={product.public_url}>
          <div className="b-item__pic-wrap">
            <ProductBlockImage product={product} />
            <ProductBlockBadges product={product} />
          </div>
          <div className="b-item__info">
            <h2 className="b-item__name">
              {product.title}
            </h2>
            {!!product.short_details &&
              <div className="b-item__details">
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