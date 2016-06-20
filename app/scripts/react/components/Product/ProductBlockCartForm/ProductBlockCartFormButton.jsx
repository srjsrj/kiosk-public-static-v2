import React, { Component, PropTypes } from 'react';
import { addGood } from '../../../actions/view/BasketActions';

class ProductBlockCartFormButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      text: props.t('vendor.button.to_cart')
    };
  }
  addToBasket() {
    const { t } = this.props;
    this.setState({
      disabled: true,
      text: t('vendor.button.already')
    });

    return addGood(this.props.product.goods[0]);
  }
  render() {
    return (
      <button
        className="b-btn element--active"
        onClick={this.addToBasket.bind(this)}
        disabled={this.state.disabled}
      >
        {this.state.text}
      </button>
    );
  }
}
ProductBlockCartFormButton.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductBlockCartFormButton;
