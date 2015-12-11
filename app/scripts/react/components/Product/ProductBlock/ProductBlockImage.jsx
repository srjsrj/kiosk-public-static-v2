import React, { Component, PropTypes } from 'react';
import Image from '../../common/Image';

class ProductBlockImage extends Component {
  state = {
    isHover: false,
  }
  getCurrentImage() {
    const { index_image_url, second_image_url } = this.props.product;
    const { isHover } = this.state;

    return isHover && second_image_url ? second_image_url : index_image_url;
  }
  handleMouseEnter() {
    this.setState({ isHover: true });
  }
  handleMouseLeave() {
    this.setState({ isHover: false });
  }
  render() {
    const { maxWidth, product: {second_image_url, title} } = this.props;
    const { currentImage } = this.state;

    return (
      <span
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
      >
        <Image
          className="b-item__pic"
          image={{ url: this.getCurrentImage() }}
          maxWidth={maxWidth}
          title={title}
        />
        {second_image_url &&
          <span style={{ display: 'none!important' }}>
            <Image
              className="b-item__pic"
              image={{ url: second_image_url }}
              maxWidth={maxWidth}
            />
          </span>
        }
      </span>
    );
  }
}

ProductBlockImage.propTypes = {
  product: PropTypes.object.isRequired,
  maxWidth: PropTypes.number,
};
ProductBlockImage.defaultProps = {
  maxWidth: 458,
};

export default ProductBlockImage;