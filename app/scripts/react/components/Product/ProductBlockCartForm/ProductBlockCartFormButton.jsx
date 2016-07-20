import React, { Component, PropTypes } from 'react';
import { addGood } from '../../../actions/view/BasketActions';
import BasketStore from '../../../stores/BasketStore';
import InputNumberSpinner from '../../common/InputNumberSpinner';
import { extend } from 'lodash';

class ProductBlockCartFormButton extends Component {
  constructor(props) {
    super(props);

    const { t } = this.props;

    this.state = this.getStateFromStore();
    this.state = { ...this.getStateFromStore(), amount: 1 }
  }
  componentDidMount() {
    this.syncWithStore = () => {
      this.setState(this.getStateFromStore());
    }

    BasketStore.addChangeListener(this.syncWithStore);
  }
  componentWillUnmount() {
    BasketStore.removeChangeListener(this.syncWithStore)
  }
  getStateFromStore() {
    return {
      itemState: BasketStore.getCartItemState(this.props.product.goods[0].id)
    };
  }
  onChangeAmount(value) {
    this.setState({amount: value});
  }
  addToBasket() {
    const { product } = this.props;

    return product.selling_by_weight ? addGood(product.goods[0], 1, this.state.amount) : addGood(product.goods[0], this.state.amount);
  }
  render() {
    const { t, showQuantity } = this.props;
    const { itemState } = this.state;
    const text = itemState.isRequestProcessing ? t('vendor.button.disable_with.adding') : t('vendor.button.to_cart');

    return (
      <div>
        {showQuantity &&
          <InputNumberSpinner value={this.state.amount} onChange={this.onChangeAmount.bind(this)} />
        }
        <button
          className="b-btn element--active"
          onClick={this.addToBasket.bind(this)}
          disabled={itemState.isRequestProcessing}
        >
          {text}
        </button>
      </div>
    );
  }
}
ProductBlockCartFormButton.propTypes = {
  product: PropTypes.object.isRequired,
  showQuantity: PropTypes.bool
};
ProductBlockCartFormButton.defaultProps = {
  showQuantity: false
};

export default ProductBlockCartFormButton;
