import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';

export default class ProductCartWishlist extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
  }
  render() {
    if (this.props.url) {
      return (
        <div className="add-to-wishlist">
          <a href={this.props.url} rel="nofollow">
            <i className="fa fa-heart" />
            Добавить в "Мои желания"
          </a>
        </div>
      );
    } else {
      return null;
    }
  }
}