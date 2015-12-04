import $ from 'jquery';
import classNames from 'classnames';
import React, { Component, findDOMNode, PropTypes } from 'react';
import { PHOTO_CHANGE } from '../../../constants/globalEventKeys';
import ProductCardGalleryImage from './ProductCardGalleryImage';
import ProductCardGallerySlider from './ProductCardGallerySlider';

class ProductCardGallery extends Component {
  render() {
    const { isKioskEnvironment } = this.props;

    if (isKioskEnvironment) {
      return <ProductCardGallerySlider {...this.props} />;
    } else {
      return <ProductCardGalleryImage {...this.props} />;
    }
  }
}

ProductCardGallery.propTypes = {
  isKioskEnvironment: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      uid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      url: PropTypes.string.isRequired,
    }),
  ),
  previewWidth: PropTypes.number,
  thumbWidth: PropTypes.number,
};
ProductCardGallery.defaultProps = {
  images: [],
  previewWidth: 460,
  thumbWidth: 115,
};

export default ProductCardGallery;