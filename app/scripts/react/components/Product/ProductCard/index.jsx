import React, { PropTypes } from 'react';
import { h1 } from '../../../helpers/seo';
import { productCategoryPath } from '../../../helpers/vendors';
import { schemaOrgMarkup } from '../../../helpers/product';
import ProductCart from '../ProductCart';
import ProductDetails from '../ProductDetails';
import ProductGallery from '../ProductGallery';
import ProductPrices from '../ProductPrices';
import ProductVideo from '../ProductVideo';
import ProductCardBadges from './ProductCardBadges';
import ProductCardSimilarProducts from './ProductCardSimilarProducts';

export default class ProductCard {
  static propTypes = {
    product: PropTypes.object.isRequired,
    similarProducts: PropTypes.array.isRequired,
    onProductChange: PropTypes.func.isRequired,
  }
  render() {
    const { product, onProductChange, similarProducts } = this.props;

    return (
      <div
        className="b-page__content__inner b-page__content__inner_content"
        itemType="http://schema.org/Product"
      >
        <div className="b-item-full">
          <div className="b-item-full__header b-item-full__header_mobile">
            <div className="b-breadcrumbs">
              {productCategoryPath(product)}
            </div>
            <h1 className="b-item-full__title">
              {h1(product)} {}
              {product.article &&
                <span className="b-item-full__articul">
                  {product.article}
                </span>
              }
            </h1>
            <ProductCardBadges product={product} />
          </div>

          <div className="b-item-full__content">
            <div className="b-item-full__gallery">
              <ProductGallery images={product.images} />
            </div>
            <div className="b-item-full__description">
              <div className="b-item-full__header">
                <div className="b-breadcrumbs p-category">
                  {productCategoryPath(product)}
                </div>
                <h1 className="b-item-full__title p-name">
                  {h1(product)}
                  {product.article &&
                    <span className="b-item-full__articul u-identifier">
                      {product.article}
                    </span>
                  }
                </h1>
                <ProductCardBadges product={product} />
              </div>
              <div className="b-item-full__price p-price">
                <ProductPrices product={product} />
              </div>
              {schemaOrgMarkup(product)}
              <div className="b-item-full__form">
                <ProductCart
                  product={product}
                  onProductChange={onProductChange}
                />
              </div>
              <ProductDetails product={product} />
            </div>
            <ProductVideo product={product} />
          </div>
        </div>

        <ProductCardSimilarProducts products={similarProducts} />
      </div>
    );
  }
}