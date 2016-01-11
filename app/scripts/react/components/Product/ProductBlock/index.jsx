import React, { Component, PropTypes } from 'react';

import provideTranslations from '../../HoC/provideTranslations';

import ProductBlockImage from './ProductBlockImage';
import ProductBlockBadges from './ProductBlockBadges';
import ProductPrices from '../ProductPrices';

const ProductBlock = ({ product, t }) => (
  <div className="b-item-list__item">
    <a className="b-item" href={product.public_url}>
      <div className="b-item__pic-wrap">
        <ProductBlockImage product={product} />
        <ProductBlockBadges product={product} t={t} />
      </div>
      <div className="b-item__info">
        <h2 className="b-item__name">
          {product.title}
        </h2>
        {Boolean(product.short_details) &&
          <div className="b-item__details">
            {product.short_details}
          </div>
        }
        <ProductPrices product={product} t={t} />
      </div>
    </a>
  </div>
);

ProductBlock.propTypes = {
  product: PropTypes.object.isRequired,
};

export default provideTranslations(ProductBlock);