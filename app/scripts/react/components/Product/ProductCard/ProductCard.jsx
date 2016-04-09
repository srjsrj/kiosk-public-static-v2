import React, { Component, PropTypes } from 'react';
import provideTranslations from '../../HoC/provideTranslations';
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
import ReactDisqusThread from 'react-disqus-thread';
import { DISQUS_IDENTIFIER } from './ProductCard.constants';

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
  renderDisqus(product) {
    var disqus_identifier = DISQUS_IDENTIFIER + product.id;

    if (this.props.hasComments && this.props.disqusUrl && this.props.disqusUrl.trim()) {
      return (
        <ReactDisqusThread shortname={this.props.disqusUrl} identifier={disqus_identifier} />
      );
    }else{
      return null;
    }
  }
  onWeightChange(value){
    this.refs.productPrices.onWeightChange(value);
  }
  render() {
    const { similarProducts, t } = this.props;
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
              <ProductCardBadges product={product} t={t} />
            </div>

            <div className="b-item-full__content">
              <div className="b-item-full__gallery">
                <ProductCardGallery
                  images={product.images}
                  isKioskEnvironment={this.isKioskEnvironment()}
                  t={t}
                />
              </div>
              <div className="b-item-full__description">
                <div className="b-item-full__header">
                  <ProductCardBreadcrumbs className="p-category" product={product} />
                  <ProductCardTitle className="p-name" product={product} />
                  <ProductCardBadges product={product} t={t} />
                </div>
                <div className="b-item-full__price p-price">
                  <ProductPrices ref="productPrices" good={good} product={product} />
                </div>
                <ProductCardSchema product={product} />
                <div className="b-item-full__form">
                  <ProductCart
                    {...this.props}
                    {...this.state}
                    onWeightChange={this.onWeightChange.bind(this)}
                    onGoodChange={this.handleGoodChange.bind(this)}
                    t={t}
                  />
                </div>
                <ProductCardDetails product={product} />
              </div>
              <ProductCardVideo product={product} />
            </div>
            <ProductCardSimilarProducts products={similarProducts} t={t} />
            {this.renderDisqus(product)}
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
  hasComments: PropTypes.bool,
  disqusUrl: PropTypes.string,
  isWishlisted: PropTypes.bool,
  product: PropTypes.object,
  similarProducts: PropTypes.array,
  wishlistUrl: PropTypes.string,
};
ProductCard.defaultProps = {
  formAuthenticity: {},
  hasComments: false,
  disqusUrl: "",
  product: {},
  similarProducts: [],
};

export default provideTranslations(ProductCard);
