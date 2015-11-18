import React, { Component, PropTypes } from 'react';
import Bubble from '../Bubble';

export default class CartButton extends Component {
  static propTypes = {
    itemsCount: PropTypes.number,
    text: PropTypes.string,
    url: PropTypes.string.isRequired,
  }
  render() {
    const { itemsCount, text, url } = this.props;

    return (
      <Bubble
        className="bubble--cart element--active-opacity"
        count={itemsCount}
        data={['cart-button']}
        text={text}
        url={url}
      />
    );
  }
}