import React, { Component, PropTypes } from 'react';
import { load } from '../../../actions/productCardActions';
import ProductCard from './ProductCard';

class ProductCardContainer extends Component {
  constructor(props) {
    super(props);
    const { productCard, productCardID } = props;

    this.state = {
      good: null,
      isLoading: !!(!productCard && productCardID),
      productCard: productCard || null,
    };
  }
  componentDidMount() {
    const { productCard, productCardID } = this.props;

    if (!productCard && productCardID) {
      load(productCardID)
        .then((productCard) => {
          this.setState({
            productCard, isLoading: false,
          });
        });
    }
  }
  handleGoodChange(good) {
    const { product } = this.state.productCard;

    this.setState({
      good,
      product: {
        ...product,
        article: good ? good.article : null,
      }
    });
  }
  render() {
    const { good, isLoading, productCard } = this.state;

    if (isLoading) {
      return <span>Loading...</span>;
    } else {
      return (
        <ProductCard
          {...productCard}
          good={good}
          onGoodChange={this.handleGoodChange.bind(this)}
        />
      );
    }
  }
}

ProductCardContainer.propTypes = {
  productCard: PropTypes.object,
  productCardID: PropTypes.number,
};

export default ProductCardContainer;