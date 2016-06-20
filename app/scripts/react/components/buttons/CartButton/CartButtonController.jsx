import React, { Component, PropTypes } from 'react';
import BasketStore from '../../../stores/BasketStore';
import CartButton from './CartButton';
import { updateBasketState } from '../../../actions/view/BasketActions';

class CartButtonController extends Component {
  static propTypes = {
    cartItems: PropTypes.array,
    text: PropTypes.string,
    url: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);

    updateBasketState(this.props.cartItems);
    this.state = this.getStateFromStore();
  }
  componentWillMount() {
    this.syncWithStore = () => {
      this.setState(this.getStateFromStore);
    }

    BasketStore.addChangeListener(this.syncWithStore);
  }
  componentWillUnmount() {
    BasketStore.removeChangeListener(this.syncWithStore)
  }
  getStateFromStore() {
    return {
      cartItems: BasketStore.getCartItems()
    };
  }
  render() {
    return (
      <CartButton
        {...this.props}
        cartItems={this.state.cartItems}
      />
    );
  }
}

export default CartButtonController;
