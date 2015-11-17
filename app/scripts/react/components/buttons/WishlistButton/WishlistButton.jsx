import React, { Component, PropTypes } from 'react';
import Bubble from '../Bubble';

export default class WishlistButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    url: PropTypes.string.isRequired,
  }
  render() {
    const { text, url } = this.props;

    return (
      <Bubble
        className="bubble--wishlist"
        text={text}
        url={url}
      />
    );
  }
}