import React, { Component, PropTypes } from 'react';
import CartListItem from './CartListItem';
import CartListPackageItem from './CartListPackageItem';
import CartListPackages from './CartListPackages';

class CartList extends Component {
  render() {
    const {
      availablePackageItems,
      items,
      packageItem,
      t,
    } = this.props;

    return (
      <ul className="b-cart__list">
        {items.map((item) => <CartListItem item={item} t={t} />)}
        {packageItem != null
          ? <CartListPackageItem item={packageItem} t={t} />
          : <CartListPackages packages={availablePackageItems} t={t} />
        }
      </ul>
    );
  }
}

CartList.propTypes = {
  availablePackageItems: PropTypes.array,
  items: PropTypes.array.isRequired,
  packageItem: PropTypes.object,
  t: PropTypes.func.isRequired,
};

export default CartList;
