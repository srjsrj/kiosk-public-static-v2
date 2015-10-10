import React, { PropTypes } from 'react';

export default class ProductCardSchemaMarkup {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    return (
      <div style={{display: 'none'}}>
        <meta itemProp="name" content={product.h1 || product.name || product.title} />
        <meta itemProp="productID" content={product.article ? `sku:${product.article}` : ''} />
      </div>
    );
  }
}

// meta itemprop: :name, content: seo_h1(product)
//         meta itemprop: :productID, content: schema_org_product_article(product)
//         # TODO: brand
//         # meta itemprop: :brand

//         product.goods.each do |good|
//           text_node schema_org_good_price good
//         end
//       end