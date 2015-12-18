import React, { Component, PropTypes } from 'react';
import Image from '../../common/Image';

class ProductBlockImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHover: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  getCurrentImage() {
    const { index_image, second_image } = this.props.product;
    const { isHover } = this.state;

    return isHover && second_image ? second_image : index_image;
  }
  handleMouseEnter() {
    this.setState({ isHover: true });
  }
  handleMouseLeave() {
    this.setState({ isHover: false });
  }
  render() {
    const { maxWidth, product: {second_image, title} } = this.props;
    const { currentImage } = this.state;

    return (
      <span
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Image
          className="b-item__pic"
          image={this.getCurrentImage()}
          maxWidth={maxWidth}
          title={title}
        />
        {second_image
          ? <span style={{ display: 'none!important' }}>
              <Image
                className="b-item__pic"
                image={second_image}
                maxWidth={maxWidth}
              />
            </span>
          : null
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