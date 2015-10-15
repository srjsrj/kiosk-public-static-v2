import React, { Component, PropTypes } from 'react';
import ProductCard from '.';

export default class ProductCardContainer extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    similarProducts: PropTypes.array.isRequired,
  }
  state = {
    product: this.props.product
  }
  handleProductChange(field, value) {
    const { product } = this.state;

    if (!!value) {
      this.setState({
        product: { ...product, [field]: value }
      });
    }
  }
  render() {
    return (
      <ProductCard
        product={this.state.product}
        similarProducts={this.props.similarProducts}
        onProductChange={this.handleProductChange.bind(this)}
      />
    );
  }
}