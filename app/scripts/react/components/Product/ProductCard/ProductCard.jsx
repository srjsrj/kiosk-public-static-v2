import React, { PropTypes } from 'react';
import ProductCart from '../ProductCart';
import ProductPrices from '../ProductPrices';
import ProductCardBadges from './ProductCardBadges';
import ProductCardBreadcrumbs from './ProductCardBreadcrumbs';
import ProductCardDetails from './ProductCardDetails';
import ProductCardGallery from './ProductCardGallery';
import ProductCardSchema from './ProductCardSchema';
import ProductCardSimilarProducts from './ProductCardSimilarProducts';
import ProductCardTitle from './ProductCardTitle';
import ProductCardVideo from './ProductCardVideo';

export default class ProductCard {
  static propTypes = {
    formAuthenticity: PropTypes.object,
    good: PropTypes.object,
    product: PropTypes.object.isRequired,
    similarProducts: PropTypes.array,
    onGoodChange: PropTypes.func,
  }
  render() {
    const { good, product, onGoodChange, similarProducts } = this.props;

    return (
      <div
        className="b-page__content__inner b-page__content__inner_content h-product"
        itemScope={true}
        itemType="http://schema.org/Product"
      >
        <div className="b-item-full">
          <div className="b-item-full__header b-item-full__header_mobile">
            <ProductCardBreadcrumbs product={product} />
            <ProductCardTitle product={product} />
            <ProductCardBadges product={product} />
          </div>

          <div className="b-item-full__content">
            <div className="b-item-full__gallery">
              <ProductCardGallery images={product.images} />
            </div>
            <div className="b-item-full__description">
              <div className="b-item-full__header">
                <ProductCardBreadcrumbs className="p-category" product={product} />
                <ProductCardTitle className="p-name" product={product} />
                <ProductCardBadges product={product} />
              </div>
              <div className="b-item-full__price p-price">
                <ProductPrices good={good} product={product} />
              </div>
              <ProductCardSchema product={product} />
              <div className="b-item-full__form">
                <ProductCart
                  formAuthenticity={this.props.formAuthenticity}
                  product={product}
                  onGoodChange={onGoodChange}
                />
              </div>
              <ProductCardDetails product={product} />
            </div>
            <ProductCardVideo product={product} />
          </div>
        </div>

        <ProductCardSimilarProducts products={similarProducts} />
      </div>
    );
  }
}