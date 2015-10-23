import React, { Component, PropTypes } from 'react';
import ErrorService from '../../../services/Error';
import ProductCard from './ProductCard';

export default class ProductCardContainer extends Component {
  static propTypes = {
    formAuthenticity: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired,
    similarProducts: PropTypes.array.isRequired,
  }
  state = {
    good: null,
    product: this.props.product
  }
  componentDidMount() {
    // TODO: Make TestComponentService or smth
    this.validateProps(this.props);
  }
  validateProps(props) {
    // Number of attributes in every good equals number of product properties
    const { product: { goods, properties } } = props;

    if (properties && properties.length && goods && goods.length) {
      const propertiesCount = properties.length;
      const hasDifferentCount = goods.some((el) =>
        Object.keys(el.attributes).length !== propertiesCount
      );

      if (hasDifferentCount) {
        ErrorService.notifyErrorProps('Количество свойств товара отличается от количества аттрибутов варианта', {
          props,
          component: 'ProductCard',
        });
      }
    }
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