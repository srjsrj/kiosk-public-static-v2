import React, { Component, PropTypes } from 'react';
import { load } from '../../../actions/productCardActions';
import { ERROR_STATE, LOADING_STATE, READY_STATE } from './ProductCardContainer.constants';
import ProductCard from './ProductCard';

class ProductCardContainer extends Component {
  state = {
    currentState: this.isNeededLoading(this.props) ? LOADING_STATE : ERROR_STATE,
    productCard: null,
  }
  componentDidMount() {
    const { productCardID, vendorID } = this.props;

    if (this.isNeededLoading(this.props)) {
      load(vendorID, productCardID)
        .then((productCard) => {
          this.setState({
            productCard,
            currentState: READY_STATE,
          });
        })
        .fail(() => {
          this.setState({
            currentState: ERROR_STATE
          });
        });
    }
  }
  isNeededLoading(props) {
    return !!(props.productCardID && props.vendorID);
  }
  render() {
    const { currentState, productCard } = this.state;

    switch(currentState) {
      case READY_STATE:
        return <ProductCard {...productCard} />;
      case LOADING_STATE:
        return <span>Loading...</span>;
      case ERROR_STATE:
        return <span>Loading error</span>;
      default:
        return null;
    }
  }
}

ProductCardContainer.propTypes = {
  productCardID: PropTypes.number,
  vendorID: PropTypes.number,
};

export default ProductCardContainer;