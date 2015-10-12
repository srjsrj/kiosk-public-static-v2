import React, { PropTypes } from 'react';
import { h1 } from '../../../helpers/seo';
import { productCategoryPath } from '../../../helpers/vendors';
import { schemaOrgMarkup } from '../../../helpers/product';
// import ProductArticle from '../ProductArticle';
// import ProductBreadcrumbs from '../ProductBreadcrumbs';
import ProductGallery from '../ProductGallery';
import ProductPrices from '../ProductPrices';
// import ProductTitle from '../ProductTitle';
import ProductCardBadges from './ProductCardBadges';
// import ProductCardSchemaMarkup from './ProductCardSchemaMarkup';

// import ProductBreadcrumbs from '../ProductBreadcrumbs';
// import ProductCardSimilarProducts from './ProductCardSimilarProducts';
// import ProductCardTitle from './ProductCardTitle';

export default class ProductCard {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product, productImages } = this.props;

    return (
      <div
        className="b-page__content__inner b-page__content__inner_content"
        itemScope={true}
        itemType="http://schema.org/Product"
      >
        <div className="b-item-full">
          {
            //Мобильная версия
          }
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
            </div>
            <h1 className="b-item-full__title p-name">
              {h1(product)}
              {product.article &&
                <span
                  className="b-item-full__articul u-identifier"
                  product-article={true}
                >
                  &nbsp;{product.article}
                </span>
              }
            </h1>
            <ProductCardBadges product={product} />
            <div className="b-item-full__price p-price">
              <ProductPrices product={product} />
            </div>
            {schemaOrgMarkup(product)}
          </div>
        </div>
      </div>
    );
  }
}

// export default class ProductCard {
//   static propTypes = {
//     product: PropTypes.object.isRequired,
//     productImages: PropTypes.array.isRequired,
//   }
//   render() {
//     const { product, productImages } = this.props;

//     return (
//       <div
//         className="b-page__content__inner b-page__content__inner_content h-product"
//         itemScope={true}
//         itemType="http://schema.org/Product"
//       >
//         <div className="b-item-full">
//           {
//             // <div className="b-item-full__header b-item-full__header_mobile">
//             //   <ProductBreadcrumbs product={product} />
//             //   <h1 className="b-item-full__title">
//             //     <ProductTitle product={product} /> {}
//             //     <ProductArticle product={product} />
//             //   </h1>
//             //   <ProductCardBadges product={product} />
//             // </div>
//           }
//           <div className="b-item-full__content">
//             <div className="b-item-full__gallery">
//               <ProductGallery images={productImages} />
//             </div>
//             <div className="b-item-full__description">
//               <div className="b-item-full__header">
//                 <ProductBreadcrumbs className="p-category" product={product} />
//                 <h1 className="b-item-full__title p-name">
//                   <ProductTitle product={product} />
//                   <ProductArticle className="u-identifier" product={product} />
//                 </h1>
//                 <ProductCardBadges product={product} />
//               </div>
//               <div className="b-item-full__price p-price">
//                 <ProductPrices product={product} />
//               </div>
//               <ProductCardSchemaMarkup product={product} />
//             </div>
//           </div>
//         </div>
//         {
//           //<ProductCardSimilarProducts products={similarProducts} />
//         }
//       </div>
//     );
//   }
// }





// .b-page__content__inner.b-page__content__inner_content.h-product{itemscope: true, itemtype: 'http://schema.org/Product'}
//   .b-item-full
//     .b-item-full__header.b-item-full__header_mobile
//       .b-breadcrumbs
//         - # product.categories - массив категорий
//         = product_category_path product

//       %h1.b-item-full__title
//         = h1(product)
//         %span.b-item-full__articul{'product-article' => true}
//           = product.article

//       -# product_card_badges
//       -# product_block_badges
//       = product_badges product, show_not_aval: false

//     .b-item-full__content
//       .b-item-full__gallery
//         = product_gallery product
//       .b-item-full__description
//         .b-item-full__header
//           .b-breadcrumbs.p-category
//             = product_category_path product

//           %h1.b-item-full__title.p-name
//             = h1(product)
//             %span.b-item-full__articul.u-identifier{'product-article' => true}
//               = product.article

//           = product_badges product, show_not_aval: false

//         .b-item-full__price.p-price
//           = product_prices product

//         = schema_org_markup product

//         .b-item-full__form
//           = render 'cart', product: product

//         = render 'product_details', product: product

//       - if product.video_present?
//         .b-item-full__video
//           -# product.embed_video_html
//           = embed_product_video product

//   = similar_products_component product
