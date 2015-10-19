import React, { Component, PropTypes } from 'react';
import containerProps from './containerProps';
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
                <ProductPrices product={product} />
              </div>
              <ProductCardSchema product={product} />
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

export default class ProductCardContainer extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    similarProducts: PropTypes.array.isRequired,
  }
  static defaultProps = {...containerProps};
  state = {
    product: this.props.product
  }
  handleProductChange(field, value) {
    const { product } = this.state;

    if (!!value) {
      this.setState({
        product: { ...product, [field]: value }
      });
    }
  }
  render() {
    return (
      <ProductCard
        product={this.state.product}
        similarProducts={this.props.similarProducts}
        onProductChange={this.handleProductChange.bind(this)}
      />
    );
  }
}