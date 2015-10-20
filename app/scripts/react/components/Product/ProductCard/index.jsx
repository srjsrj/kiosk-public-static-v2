import React, { Component, PropTypes } from 'react';
import ProductCart from '../ProductCart';
import ProductDetails from '../ProductDetails';
import ProductGallery from '../ProductGallery';
import ProductPrices from '../ProductPrices';
import ProductVideo from '../ProductVideo';
import ProductCardBadges from './ProductCardBadges';
import ProductCardBreadcrumbs from './ProductCardBreadcrumbs';
import ProductCardSchema from './ProductCardSchema';
import ProductCardSimilarProducts from './ProductCardSimilarProducts';
import ProductCardTitle from './ProductCardTitle';

class ProductCard {
  static propTypes = {
    good: PropTypes.object,
    product: PropTypes.object.isRequired,
    similarProducts: PropTypes.array.isRequired,
    onGoodChange: PropTypes.func.isRequired,
  }
  render() {
    const { good, product, onGoodChange, similarProducts } = this.props;

    return (
      <div
        className="b-page__content__inner b-page__content__inner_content"
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
              <ProductGallery images={product.images} />
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
                  product={product}
                  onGoodChange={onGoodChange}
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

export default class ProductCardContainer extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    similarProducts: PropTypes.array.isRequired,
  }
  state = {
    good: null,
    product: this.props.product
  }
  handleGoodChange(good) {
    const product = {
      ...this.state.product,
      article: good.article,
    };

    this.setState({ good, product });
  }
  render() {
    return (
      <ProductCard
        onGoodChange={this.handleGoodChange.bind(this)}
        good={this.state.good}
        product={this.state.product}
        similarProducts={this.props.similarProducts}
      />
    );
  }
}