import React, { Component, PropTypes } from 'react';

import * as schemas from '../../../schemas';

import ProductBlock from '../ProductBlock';

const ProductCardSimilarProducts = ({ products, t }) => (
  products && products.length
    ? <section className="b-item-list b-item-list_additional">
        <h1 className="b-item-list__title">
          {t('vendor.similar_product.title')}
        </h1>
        <div className="b-item-list__content">
          {products.map(product =>
            <ProductBlock key={product.id} product={product} />)}
        </div>
      </section>
    : <span />
);

ProductCardSimilarProducts.propTypes = {
  products: PropTypes.arrayOf(schemas.product),
};

ProductCardSimilarProducts.defaultProps = {
  products: [],
};

export default ProductCardSimilarProducts;