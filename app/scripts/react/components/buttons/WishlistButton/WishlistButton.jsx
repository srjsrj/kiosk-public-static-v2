import React, { Component, PropTypes } from 'react';
import Bubble from '../Bubble';

export default class WishlistButton extends Component {
  static propTypes = {
    itemsCount: PropTypes.number,
    text: PropTypes.string,
    url: PropTypes.string.isRequired,
  }
  render() {
    const { itemsCount, text, url } = this.props;

    return (
      <Bubble
        className="Bubble--wishlist element--active-opacity"
        count={itemsCount}
        text={text}
        url={url}
      />
    );
  }
}