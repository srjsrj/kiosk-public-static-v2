import React, { PropTypes } from 'react';
import { h1 } from '../../helpers/seo';
import { simpleFormat } from '../../helpers/text';
import { attributeValue, textBlockContent } from '../../helpers/product';

export default class ProductDetails {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  renderAttributes(product) {
    return (
      <ul className="b-characteristics">
        {
          product.attributes.map((attr) =>
            <li key={attr.id}>
              {attributeValue(attr)}
            </li>
          )
        }
      </ul>
    );
  }
  renderDescription(product) {
    if (product.description) {
      return (
        <div className="b-item-full__text e-description" itemProp="description">
          {simpleFormat(product.description)}
        </div>
      );
    } else {
      return <meta itemProp="description" content={h1(product)} />;
    }
  }
  renderTextBlocks(product) {
    return product.text_blocks.map((block, idx) =>
      <div className="b-item-full__text" key={idx}>
        <h4>{block.title}</h4>
        {textBlockContent(block)}
      </div>
    );
  }
  render() {
    const { product } = this.props;

    return (
      <span>
        <span dangerouslySetInnerHTML={{ __html: product.custom_product_html }} />
        {this.renderDescription(product)}
        {this.renderAttributes(product)}
        {this.renderTextBlocks(product)}
      </span>
    );
  }
}