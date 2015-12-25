import React, { findDOMNode, Component, PropTypes } from 'react';
import Image from './Image';

class RelativeImage extends Component {
  state = {
    height: null,
    width: null,
  }
  componentDidMount() {
    this.setRelativeSize(this.props.maxHeight, this.props.maxWidth);
  }
  getParentWithSize(elt) {
    let current = elt;

    while (current.parentNode) {
      current = current.parentNode;

      if (current.offsetHeight && current.offsetWidth) {
        return current;
      }
    }

    return null;
  }
  setRelativeSize(maxHeight, maxWidth) {
    const elt = findDOMNode(this);
    const parent = this.getParentWithSize(elt);

    let height = maxHeight;
    let width = maxWidth;

    if (parent) {
      height = parent.offsetHeight;
      width = parent.offsetWidth;
    }

    this.setState({ height, width });
  }
  render() {
    const { height, width } = this.state;

    if (height || width) {
      return (
        <Image
          {...this.props}
          hasFixedSize={Boolean(height && width)}
          maxHeight={height}
          maxWidth={width}
        />
      );
    }

    return <span />;
  }
}

RelativeImage.propTypes = {
  maxHeight: PropTypes.number,
  maxWidth: PropTypes.number,
};
RelativeImage.defaultProps = {
  maxHeight: null,
  maxWidth: null,
};

export default RelativeImage;