import React, { PropTypes } from 'react';
import ThumborService from '../../services/Thumbor';

export default class Image {
  static propTypes = {
    className: PropTypes.string,
    fixedSize: PropTypes.bool,
    image: PropTypes.shape({
      geometry: PropTypes.object,
      url: PropTypes.string.isRequired,
    }).isRequired,
    isRawUrl: PropTypes.bool,
    maxHeight: PropTypes.number,
    maxWidth: PropTypes.number,
    title: PropTypes.string,
  }
  getSize() {
    const { maxHeight, maxWidth, image: { geometry } } = this.props;

    let size;
    if (geometry && geometry.width && geometry.height) {
      if (maxWidth || maxHeight) {
        const maximumWidth = maxWidth || maxHeight;
        const maximumHeight = maxHeight || maxWidth;
        const srcWidth = geometry.width;
        const srcHeight = geometry.height;

        let height, ratio, width;
        if (srcWidth > maximumWidth) {
          ratio = maximumWidth / srcWidth;
          height = srcHeight * ratio;
          width = maximumWidth;
        } else if (srcHeight > maximumHeight) {
          ratio = maximumHeight / srcHeight;
          height = maximumHeight;
          width = srcWidth * ratio;
        } else {
          height = srcHeight;
          width = srcWidth;
        }

        size = {
          width: parseInt(width, 10),
          height: parseInt(height, 10),
        };
      } else {
        size = {
          height: geometry.height,
          width: geometry.width,
        };
      }
    } else {
      size = {
        height: maxHeight || null,
        width: maxWidth || null,
      };
    }

    return size;
  }
  getUrl() {
    const size = this.getSize();
    return ThumborService.imageUrl(this.props.image.url, size);
  }
  getRetinaUrl() {
    const size = this.getSize();
    return ThumborService.retinaImageUrl(this.props.image.url, size);
  }
  render() {
    const { className, fixedSize, image, isRawUrl, title } = this.props;

    return (
      <img
        alt={title}
        className={className}
        src={isRawUrl ? image.url : this.getUrl()}
        srcSet={isRawUrl ? void 0 : this.getRetinaUrl()}
        style={fixedSize ? this.getSize() : void 0}
        title={title}
      />
    );
  }
}