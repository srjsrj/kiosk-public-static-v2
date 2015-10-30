import React from 'react';
import PropTypes from 'propTypes';
import { h1 } from '../../../helpers/seo';
import { attributeValue } from '../../../helpers/product';

export default class ProductCardDetails {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  renderAttributes(product) {
    if (product.attributes && product.attributes.length) {
      return (
        <ul className="b-characteristics" ref="attributes">
          {
            product.attributes.map((attr, idx) =>
              <li key={idx}>
                {attributeValue(attr)}
              </li>
            )
          }
        </ul>
      );
    }
  }
  renderDescription(product) {
    if (product.description) {
      return (
        <div
          className="b-item-full__text e-description"
          dangerouslySetInnerHTML={{ __html: product.description }}
          itemProp="description"
          ref="description"
        />
      );
    } else {
      return <meta itemProp="description" content={h1(product)} />;
    }
  }
  renderTextBlocks(product) {
    if (product.text_blocks && product.text_blocks.length) {
      return (
        <span ref="textBlocks">
          {
            product.text_blocks.map((block, idx) => (
              <div className="b-item-full__text" key={idx}>
                <h4>{block.title}</h4>
                <span dangerouslySetInnerHTML={{ __html: block.content }} />
              </div>
            ))
          }
        </span>
      );
    }
  }
  render() {
    const { product } = this.props;

    if (product) {
      return (
        <span>
          <span dangerouslySetInnerHTML={{ __html: product.custom_product_html }} />
          {this.renderDescription(product)}
          {this.renderAttributes(product)}
          {this.renderTextBlocks(product)}
        </span>
      );
    } else {
      return null;
    }
  }
}