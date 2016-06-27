import React, { Component, PropTypes } from 'react';
import { addGood } from '../../../actions/view/BasketActions';
import BasketStore from '../../../stores/BasketStore';
import { extend } from 'lodash';

class ProductBlockCartFormButton extends Component {
  constructor(props) {
    super(props);

    const { t } = this.props;

    this.state = this.getStateFromStore();
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

  addToBasket() {
    return addGood(this.props.product.goods[0]);
  }
  render() {
    const { t } = this.props;
    const { itemState } = this.state;
    const text = itemState.isRequestProcessing ? t('vendor.button.disable_with.adding') : t('vendor.button.to_cart');

    return (
      <button
        className="b-btn element--active"
        onClick={this.addToBasket.bind(this)}
        disabled={itemState.isRequestProcessing}
      >
        {text}
      </button>
    );
  }
}
ProductBlockCartFormButton.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductBlockCartFormButton;
