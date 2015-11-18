import React, { Component, PropTypes } from 'react';
import makeTranslatable from '../../HoC/makeTranslatable';
import ProductCard from './ProductCard';

@makeTranslatable
export default class ProductCardContainer extends Component {
  static propTypes = {
    addWishlistUrl: PropTypes.string,
    formAuthenticity: PropTypes.object,
    hasWishlist: PropTypes.bool,
    isWishlisted: PropTypes.bool,
    product: PropTypes.object.isRequired,
    similarProducts: PropTypes.array,
    wishlistUrl: PropTypes.string,
  }
  static defaultProps = {
    formAuthenticity: {},
    similarProducts: [],
  }
  state = {
    good: null,
    product: this.props.product
  }
  handleGoodChange(good) {
    const product = {
      ...this.state.product,
      article: good ? good.article : null,
    };

    this.setState({ good, product });
  }
  render() {
    return (
      <ProductCard
        {...this.props}
        good={this.state.good}
        onGoodChange={this.handleGoodChange.bind(this)}
        product={this.state.product}
      />
    );
  }
}