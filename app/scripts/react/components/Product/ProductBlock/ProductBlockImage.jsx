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
    const { title } = this.props.product;
    const { currentImage } = this.state;

    return (
      <span
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
      >
        <Image
          className="b-item__pic"
          image={{ url: this.getCurrentImage() }}
          maxWidth={458}
          title={title}
        />
      </span>
    );
  }
}

ProductBlockImage.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductBlockImage;