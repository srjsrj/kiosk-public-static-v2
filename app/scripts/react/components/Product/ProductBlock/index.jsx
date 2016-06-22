import React, { Component, PropTypes } from 'react';
import provideTranslations from '../../HoC/provideTranslations';
import ProductBlockImage from './ProductBlockImage';
import ProductBlockBadges from './ProductBlockBadges';
import ProductPrices from '../ProductPrices';
import ProductBlockCartFormButton from '../ProductBlockCartForm/ProductBlockCartFormButton';

const ProductBlock = ({ showCartButton, product, t }) => (
  <div className="b-item-list__item">
    <div className="b-item">
      <a className="b-item__pic-wrap" href={product.public_url}>
        <ProductBlockImage product={product} />
        <ProductBlockBadges product={product} t={t} />
      </a>
      <a className="b-item__info" href={product.public_url}>
        <h3 className="b-item__name">
          {product.title}
        </h3>
        {Boolean(product.short_details) &&
          <div className="b-item__details">
            {product.short_details}
          </div>
        }
        <ProductPrices product={product} t={t} />
      </a>
      {showCartButton && product.has_ordering_goods && product.goods.length == 1 &&
        <div className="b-item__cart-form">
          <ProductBlockCartFormButton t={t} product={product}/>
        </div>
      }
    </div>
  </div>
);

ProductBlock.propTypes = {
  product: PropTypes.object.isRequired,
};

export default provideTranslations(ProductBlock);
