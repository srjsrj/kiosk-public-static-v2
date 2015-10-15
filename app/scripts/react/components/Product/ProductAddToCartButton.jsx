import React, { PropTypes } from 'react';

export default class ProductAddToCartButton {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }
  render() {
    return (
      <button
        className="b-btn element--active-opacity"
        data-disable-with="Добавляем..."
        disabled={this.props.disabled}
        name="to_cart"
        type="submit"
      >
        {this.props.text}
      </button>
    );
  }
}