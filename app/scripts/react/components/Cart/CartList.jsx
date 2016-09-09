import React, { Component, PropTypes } from 'react';
import CartListItem from './CartListItem';
import CartListPackageItem from './CartListPackageItem';
import CartListPackages from './CartListPackages';

class CartList extends Component {
  render() {
    const {
      availablePackages,
      items,
      packageItem,
      t,
    } = this.props;

    return (
      <ul className="b-cart__list">
        {items.map((item, idx) => (
          <CartListItem
            item={item}
            key={`cart-item-${idx}`}
            t={t}
          />
        ))}
        {packageItem != null
          ? <CartListPackageItem item={packageItem} t={t} />
          : <CartListPackages packages={availablePackages} t={t} />
        }
      </ul>
    );
  }
}

CartList.propTypes = {
  availablePackages: PropTypes.array,
  items: PropTypes.array.isRequired,
  packageItem: PropTypes.object,
  t: PropTypes.func.isRequired,
};

export default CartList;
