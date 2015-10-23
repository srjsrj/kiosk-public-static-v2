import React, { Component, PropTypes } from 'react';
import ProductCard from './ProductCard';

export default class ProductCardContainer extends Component {
  static propTypes = {
    formAuthenticity: PropTypes.object,
    product: PropTypes.object.isRequired,
    similarProducts: PropTypes.array,
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
        formAuthenticity={this.props.formAuthenticity}
        good={this.state.good}
        onGoodChange={this.handleGoodChange.bind(this)}
        product={this.state.product}
        similarProducts={this.props.similarProducts}
      />
    );
  }
}