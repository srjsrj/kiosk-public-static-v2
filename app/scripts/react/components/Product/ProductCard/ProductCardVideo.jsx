import React, { PropTypes } from 'react';

export default class ProductCardVideo {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    if (product.video_embed_html) {
      return (
        <div
          className={process.env.KIOSK_CSS_PREFIX + 'b-item-full__video'}
          dangerouslySetInnerHTML={{ __html: product.video_embed_html }}
        />
      );
    }
    return null;
  }
}