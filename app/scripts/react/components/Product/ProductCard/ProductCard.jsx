import React, { Component, PropTypes } from 'react';
import makeTranslatable from '../../HoC/makeTranslatable';
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

@makeTranslatable
class ProductCard extends Component {
  state = {
    good: null,
    product: this.props.product,
  }
  isKioskEnvironment() {
    return !!(global.gon && global.gon.kiiiosk);
  }
  handleGoodChange(good) {
    const article = good && good.article || this.state.product.article;
    const product = {
      ...this.state.product,
      article,
    };

    this.setState({ good, product });
  }
  render() {
    const { similarProducts } = this.props;
    const { good, product } = this.state;

    return (
      <div className="mrch-ProductCard cleanslate">
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
                <ProductCardGallery
                  images={product.images}
                  isKioskEnvironment={this.isKioskEnvironment()}
                />
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
                    {...this.props}
                    {...this.state}
                    onGoodChange={this.handleGoodChange.bind(this)}
                  />
                </div>
                <ProductCardDetails product={product} />
              </div>
              <ProductCardVideo product={product} />
            </div>

            <ProductCardSimilarProducts products={similarProducts} />
          </div>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  addWishlistUrl: PropTypes.string,
  formAuthenticity: PropTypes.object,
  hasWishlist: PropTypes.bool,
  isWishlisted: PropTypes.bool,
  product: PropTypes.object,
  similarProducts: PropTypes.array,
  wishlistUrl: PropTypes.string,
};
ProductCard.defaultProps = {
  formAuthenticity: {},
  product: {},
  similarProducts: [],
};

export default ProductCard;