import React, { Component, PropTypes } from 'react';
import ErrorService from '../../../services/Error';
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
    formAuthenticity: PropTypes.object.isRequired,
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
                  formAuthenticity={this.props.formAuthenticity}
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
    formAuthenticity: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired,
    similarProducts: PropTypes.array.isRequired,
  }
  state = {
    good: null,
    product: this.props.product
  }
  componentDidMount() {
    // TODO: Make TestComponentService or smth
    this.validateProps(this.props);
  }
  validateProps(props) {
    // Number of attributes in every good equals number of product properties
    const { product: { goods, properties } } = props;

    if (properties.length && goods.length) {
      const propertiesCount = properties.length;
      const hasDifferentCount = goods.some((el) =>
        Object.keys(el.attributes).length !== propertiesCount
      );

      if (hasDifferentCount) {
        ErrorService.notifyErrorProps('Количество свойств товара отличается от количества аттрибутов варианта', {
          props,
          component: 'ProductCard',
        });
      }
    }
  }
  handleGoodChange(good) {
    const product = {
      ...this.state.product,
      article: good ? good.article : null,
    };

    this.setState({ good, product });
  }
  render() {
    return (
      <ProductCard
        formAuthenticity={this.props.formAuthenticity}
        good={this.state.good}
        onGoodChange={this.handleGoodChange.bind(this)}
        product={this.state.product}
        similarProducts={this.props.similarProducts}
      />
    );
  }
}