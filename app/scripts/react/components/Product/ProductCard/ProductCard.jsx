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
      <div
        className="ProductCard h-product cleanslate"
        itemScope={true}
        itemType="http://schema.org/Product"
      >
        <div className="ProductCard-inner">
          <div className="ProductCard-content">
            <div className="ProductCard-description">
              <div className="ProductCard-header">
                <ProductCardBreadcrumbs className="p-category" product={product} />
                <ProductCardTitle className="p-name" product={product} />
                <ProductCardBadges product={product} />
              </div>
            </div>
            <div className="ProductCard-price b-item-full__price p-price">
              <ProductPrices good={good} product={product} />
            </div>
            Привет!
          </div>
        </div>
      </div>
    );
  }
}

// @makeTranslatable
// class ProductCard extends Component {
//   state = {
//     good: null,
//     product: this.props.product,
//   }
//   handleGoodChange(good) {
//     const article = good && good.article || this.state.product.article;
//     const product = {
//       ...this.state.product,
//       article,
//     };

//     this.setState({ good, product });
//   }
//   render() {
//     const { similarProducts } = this.props;
//     const { good, product } = this.state;

//     return (
//       <div
//         className={process.env.KIOSK_CSS_PREFIX + 'b-page__content__inner ' + process.env.KIOSK_CSS_PREFIX + 'b-page__content__inner_content h-product cleanslate'}
//         itemScope={true}
//         itemType="http://schema.org/Product"
//       >
//         <div className={process.env.KIOSK_CSS_PREFIX + 'b-item-full'}>
//           <div className={process.env.KIOSK_CSS_PREFIX + 'b-item-full__header ' + process.env.KIOSK_CSS_PREFIX + 'b-item-full__header_mobile'}>
//             <ProductCardBreadcrumbs product={product} />
//             <ProductCardTitle product={product} />
//             <ProductCardBadges product={product} />
//           </div>

//           <div className={process.env.KIOSK_CSS_PREFIX + 'b-item-full__content'}>
//             <div className={process.env.KIOSK_CSS_PREFIX + 'b-item-full__gallery'}>
//               <ProductCardGallery images={product.images} />
//             </div>
//             <div className={process.env.KIOSK_CSS_PREFIX + 'b-item-full__description'}>
//               <div className={process.env.KIOSK_CSS_PREFIX + 'b-item-full__header'}>
//                 <ProductCardBreadcrumbs className="p-category" product={product} />
//                 <ProductCardTitle className="p-name" product={product} />
//                 <ProductCardBadges product={product} />
//               </div>
//               <div className={process.env.KIOSK_CSS_PREFIX + 'b-item-full__price p-price'}>
//                 <ProductPrices good={good} product={product} />
//               </div>
//               <ProductCardSchema product={product} />
//               <div className={process.env.KIOSK_CSS_PREFIX + 'b-item-full__form'}>
//                 <ProductCart
//                   {...this.props}
//                   {...this.state}
//                   onGoodChange={this.handleGoodChange.bind(this)}
//                 />
//               </div>
//               <ProductCardDetails product={product} />
//             </div>
//             <ProductCardVideo product={product} />
//           </div>

//           <ProductCardSimilarProducts products={similarProducts} />
//         </div>
//       </div>
//     );
//   }
// }

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