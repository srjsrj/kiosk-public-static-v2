import $ from 'jquery';
import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

class ProductCardGalleryImage extends Component {
  render() {
    const { images, previewWidth } = this.props;
    const image = images[0];

    if (image) {
      return (
        <div className="ProductCardGallery">
          <a
            className="ProductCardGallery-imageLink"
            data-lightbox={true}
            href={image.url}
          >
            <img
              alt={image.title}
              className="ProductCardGallery-image u-photo"
              src={image.url}
              title={image.title}
              width={previewWidth}
            />
          </a>
        </div>
      );
    } else {
      return null;
    }
  }
}

ProductCardGalleryImage.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      uid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  previewWidth: PropTypes.number.isRequired,
  thumbWidth: PropTypes.number.isRequired,
};

export default ProductCardGalleryImage;