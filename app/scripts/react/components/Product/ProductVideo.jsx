import React, { PropTypes } from 'react';

export default class ProductVideo {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    const { product } = this.props;

    if (product.video_embed_html) {
      return (
        <div
          className="b-item-full__video"
          dangerouslySetInnerHTML={{ __html: product.video_embed_html }}
        />
      );
    }
    return null;
  }
}