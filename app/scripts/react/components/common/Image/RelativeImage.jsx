import React, { findDOMNode, Component, PropTypes } from 'react';
import Image from './Image';

class RelativeImage extends Component {
  state = {
    height: null,
    width: null,
  }
  componentDidMount() {
    this.setRelativeSize();
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
  setRelativeSize() {
    const elt = findDOMNode(this);
    const parent = this.getParentWithSize(elt);

    if (parent) {
      const { offsetHeight, offsetWidth } = parent;

      this.setState({
        height: offsetHeight,
        width: offsetWidth,
      });
    }
  }
  render() {
    const { height, width, test } = this.state;

    if (height && width) {
      return (
        <Image
          {...this.props}
          maxHeight={height}
          maxWidth={width}
        />
      );
    }

    return <span />;
  }
}

RelativeImage.propTypes = Image.propTypes;

export default RelativeImage;